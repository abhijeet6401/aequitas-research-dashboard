#!/usr/bin/env python3
"""
Aequitas Research Data Processor
Converts Excel files from analysts into consolidated JSON data for the dashboard
"""

import pandas as pd
import json
import os
import sys
from datetime import datetime
import logging
from typing import Dict, List, Any, Tuple
import re
import argparse

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class AequitasDataProcessor:
    """
    Main class for processing Aequitas research data
    """
    
    def __init__(self):
        self.sector_mapping = {
            'banking': 'Banking',
            'finance': 'Financial Services',
            'fintech': 'Fintech',
            'auto': 'Automotive',
            'automotive': 'Automotive',
            'power': 'Power & Utilities',
            'energy': 'Energy',
            'healthcare': 'Healthcare',
            'pharma': 'Healthcare',
            'tech': 'Technology',
            'technology': 'Technology',
            'trade': 'Trade & Policy',
            'policy': 'Trade & Policy',
            'transport': 'Transportation',
            'real estate': 'Real Estate',
            'telecom': 'Telecommunications'
        }
        
        self.priority_keywords = {
            'high': ['fta', 'agreement', 'deal', 'acquisition', 'merger', 'policy', 'regulation'],
            'medium': ['results', 'profit', 'revenue', 'quarter', 'financial', 'earnings'],
            'low': ['minor', 'routine', 'small', 'update']
        }
    
    def determine_priority(self, topic: str, notes: str) -> str:
        """
        Determine priority level based on topic and content
        """
        text = (topic + ' ' + notes).lower()
        
        # Check for high priority keywords
        for keyword in self.priority_keywords['high']:
            if keyword in text:
                return 'high'
        
        # Check for medium priority keywords
        for keyword in self.priority_keywords['medium']:
            if keyword in text:
                return 'medium'
        
        return 'medium'  # Default to medium if no clear indicators
    
    def extract_sector(self, sector_text: str, company: str, notes: str) -> str:
        """
        Extract and standardize sector information
        """
        if pd.notna(sector_text) and sector_text.strip():
            return sector_text.strip()
        
        # Try to infer from company or notes
        combined_text = f"{company} {notes}".lower()
        
        for keyword, sector in self.sector_mapping.items():
            if keyword in combined_text:
                return sector
        
        return 'Other'
    
    def process_person1_data(self, excel_path: str) -> List[Dict[str, Any]]:
        """
        Process Person 1's Excel data
        """
        logger.info(f"Processing Person 1 data from {excel_path}")
        
        try:
            df = pd.read_excel(excel_path, sheet_name='Person 1')
            
            # Clean column names
            df.columns = df.columns.str.strip()
            
            topics = []
            for idx, row in df.iterrows():
                # Skip header rows and empty rows
                if pd.isna(row.get('Topic')) or row.get('Topic') == 'Topic':
                    continue
                
                topic_data = {
                    'id': f"p1_{idx}",
                    'topic': str(row.get('Topic', '')).strip(),
                    'notes': str(row.get('Notes', '')).strip(),
                    'company': str(row.get('Company', '')).strip() if pd.notna(row.get('Company')) else '',
                    'sector': self.extract_sector(
                        str(row.get('Sector', '')), 
                        str(row.get('Company', '')), 
                        str(row.get('Notes', ''))
                    ),
                    'analyst': 'Person 1',
                    'source': 'Business Standard',
                    'date': datetime.now().strftime('%Y-%m-%d')
                }
                
                topic_data['priority'] = self.determine_priority(
                    topic_data['topic'], 
                    topic_data['notes']
                )
                
                topics.append(topic_data)
            
            logger.info(f"Processed {len(topics)} topics from Person 1")
            return topics
            
        except Exception as e:
            logger.error(f"Error processing Person 1 data: {e}")
            return []
    
    def process_person2_data(self, excel_path: str) -> List[Dict[str, Any]]:
        """
        Process Person 2's Excel data
        """
        logger.info(f"Processing Person 2 data from {excel_path}")
        
        try:
            df = pd.read_excel(excel_path, sheet_name='Person 2')
            
            topics = []
            current_topic = None
            current_notes = []
            
            for idx, row in df.iterrows():
                # Get the first column which contains the topic numbers
                first_col = str(row.iloc[0]).strip()
                second_col = str(row.iloc[1]).strip() if len(row) > 1 else ''
                
                # Check if this is a new topic (starts with number)
                if re.match(r'^\d+\.0?$', first_col):
                    # Save previous topic if exists
                    if current_topic:
                        topic_data = {
                            'id': f"p2_{current_topic['number']}",
                            'topic': current_topic['title'],
                            'notes': ' '.join(current_notes),
                            'company': self.extract_companies(' '.join(current_notes)),
                            'sector': self.infer_sector(' '.join(current_notes)),
                            'analyst': 'Person 2',
                            'source': 'Economic Times',
                            'date': datetime.now().strftime('%Y-%m-%d')
                        }
                        
                        topic_data['priority'] = self.determine_priority(
                            topic_data['topic'], 
                            topic_data['notes']
                        )
                        
                        topics.append(topic_data)
                    
                    # Start new topic
                    current_topic = {
                        'number': first_col.replace('.0', ''),
                        'title': second_col
                    }
                    current_notes = []
                
                elif current_topic and second_col and second_col != 'nan':
                    # Add to current topic's notes
                    current_notes.append(second_col)
            
            # Don't forget the last topic
            if current_topic:
                topic_data = {
                    'id': f"p2_{current_topic['number']}",
                    'topic': current_topic['title'],
                    'notes': ' '.join(current_notes),
                    'company': self.extract_companies(' '.join(current_notes)),
                    'sector': self.infer_sector(' '.join(current_notes)),
                    'analyst': 'Person 2',
                    'source': 'Economic Times',
                    'date': datetime.now().strftime('%Y-%m-%d')
                }
                
                topic_data['priority'] = self.determine_priority(
                    topic_data['topic'], 
                    topic_data['notes']
                )
                
                topics.append(topic_data)
            
            logger.info(f"Processed {len(topics)} topics from Person 2")
            return topics
            
        except Exception as e:
            logger.error(f"Error processing Person 2 data: {e}")
            return []
    
    def extract_companies(self, text: str) -> str:
        """
        Extract company names from text
        """
        # Common patterns for company names
        company_patterns = [
            r'\b[A-Z][a-z]+ [A-Z][a-z]+\b',  # Title Case Company Names
            r'\b[A-Z]{2,}\b',  # Acronyms
        ]
        
        companies = set()
        for pattern in company_patterns:
            matches = re.findall(pattern, text)
            companies.update(matches)
        
        # Filter out common words that aren't companies
        common_words = {'The', 'And', 'For', 'Bank', 'India', 'Limited', 'Ltd'}
        companies = [c for c in companies if c not in common_words]
        
        return ', '.join(list(companies)[:3])  # Return top 3 companies
    
    def infer_sector(self, text: str) -> str:
        """
        Infer sector from text content
        """
        text_lower = text.lower()
        
        for keyword, sector in self.sector_mapping.items():
            if keyword in text_lower:
                return sector
        
        return 'Other'
    
    def consolidate_topics(self, all_topics: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Consolidate overlapping topics from different analysts
        """
        logger.info("Consolidating overlapping topics...")
        
        consolidated = []
        processed_ids = set()
        
        # Define topic similarity rules
        similarity_rules = [
            {
                'keywords': ['india', 'uk', 'fta', 'trade', 'agreement'],
                'consolidated_title': 'India-UK Free Trade Agreement',
                'sector': 'Trade & Policy'
            },
            {
                'keywords': ['bank', 'baroda', 'result', 'profit'],
                'consolidated_title': 'Bank of Baroda Results',
                'sector': 'Banking'
            },
            {
                'keywords': ['nse', 'bse', 'exchange', 'profit'],
                'consolidated_title': 'Stock Exchange Results',
                'sector': 'Financial Services'
            }
        ]
        
        # Process consolidation rules
        for rule in similarity_rules:
            matching_topics = []
            for topic in all_topics:
                if topic['id'] in processed_ids:
                    continue
                
                text = (topic['topic'] + ' ' + topic['notes']).lower()
                if any(keyword in text for keyword in rule['keywords']):
                    matching_topics.append(topic)
                    processed_ids.add(topic['id'])
            
            if matching_topics:
                # Create consolidated topic
                consolidated_topic = {
                    'id': f"consolidated_{len(consolidated) + 1}",
                    'title': rule['consolidated_title'],
                    'sector': rule['sector'],
                    'priority': 'high' if any(t['priority'] == 'high' for t in matching_topics) else 'medium',
                    'analysts': list(set([t['analyst'] for t in matching_topics])),
                    'companies': list(set([t['company'] for t in matching_topics if t['company']])),
                    'key_points': [t['notes'] for t in matching_topics],
                    'sources': list(set([t['source'] for t in matching_topics])),
                    'date': datetime.now().strftime('%Y-%m-%d'),
                    'impact_score': 85 if rule['consolidated_title'] == 'India-UK Free Trade Agreement' else 70
                }
                consolidated.append(consolidated_topic)
        
        # Add remaining individual topics
        for topic in all_topics:
            if topic['id'] not in processed_ids:
                individual_topic = {
                    'id': topic['id'],
                    'title': topic['topic'],
                    'sector': topic['sector'],
                    'priority': topic['priority'],
                    'analysts': [topic['analyst']],
                    'companies': [topic['company']] if topic['company'] else [],
                    'key_points': [topic['notes']],
                    'sources': [topic['source']],
                    'date': topic['date'],
                    'impact_score': 80 if topic['priority'] == 'high' else 60
                }
                consolidated.append(individual_topic)
        
        logger.info(f"Consolidated {len(all_topics)} topics into {len(consolidated)} topics")
        return consolidated
    
    def generate_metadata(self, all_topics: List[Dict[str, Any]], consolidated_topics: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Generate metadata for the dashboard
        """
        sectors = list(set([topic['sector'] for topic in consolidated_topics]))
        
        metadata = {
            'date': datetime.now().strftime('%Y-%m-%d'),
            'total_items': len(all_topics),
            'consolidated_items': len(consolidated_topics),
            'deduplication_rate': round((1 - len(consolidated_topics)/len(all_topics)) * 100, 1),
            'analysts': ['Person 1', 'Person 2'],
            'sectors_covered': sectors
        }
        
        return metadata
    
    def process_excel_files(self, person1_path: str, person2_path: str, output_dir: str) -> bool:
        """
        Main processing function
        """
        try:
            # Process both Excel files
            person1_topics = self.process_person1_data(person1_path)
            person2_topics = self.process_person2_data(person2_path)
            
            # Combine all topics
            all_topics = person1_topics + person2_topics
            
            if not all_topics:
                logger.error("No topics found in either file")
                return False
            
            # Consolidate overlapping topics
            consolidated_topics = self.consolidate_topics(all_topics)
            
            # Generate metadata
            metadata = self.generate_metadata(all_topics, consolidated_topics)
            
            # Calculate priority breakdown
            priority_breakdown = {
                'high': len([t for t in consolidated_topics if t['priority'] == 'high']),
                'medium': len([t for t in consolidated_topics if t['priority'] == 'medium']),
                'low': len([t for t in consolidated_topics if t['priority'] == 'low'])
            }
            
            # Calculate sector analysis
            sector_analysis = {}
            for sector in metadata['sectors_covered']:
                sector_analysis[sector] = len([t for t in consolidated_topics if t['sector'] == sector])
            
            # Create final data structure
            final_data = {
                'metadata': metadata,
                'consolidated_topics': consolidated_topics,
                'priority_breakdown': priority_breakdown,
                'sector_analysis': sector_analysis
            }
            
            # Ensure output directory exists
            os.makedirs(output_dir, exist_ok=True)
            
            # Save consolidated data
            output_path = os.path.join(output_dir, 'consolidated_research_data.json')
            with open(output_path, 'w') as f:
                json.dump(final_data, f, indent=2)
            
            # Save raw data for reference
            raw_output_path = os.path.join(output_dir, 'research_data.json')
            with open(raw_output_path, 'w') as f:
                json.dump({'items': all_topics, 'consolidated': consolidated_topics}, f, indent=2)
            
            logger.info(f"Successfully processed and saved data to {output_path}")
            logger.info(f"Deduplication rate: {metadata['deduplication_rate']}%")
            logger.info(f"Priority breakdown: {priority_breakdown}")
            
            return True
            
        except Exception as e:
            logger.error(f"Error in main processing: {e}")
            return False

def main():
    """
    Command line interface
    """
    parser = argparse.ArgumentParser(description='Process Aequitas research Excel files')
    parser.add_argument('--person1', required=True, help='Path to Person 1 Excel file')
    parser.add_argument('--person2', required=True, help='Path to Person 2 Excel file')
    parser.add_argument('--output', default='data/processed', help='Output directory')
    
    args = parser.parse_args()
    
    # Validate input files
    if not os.path.exists(args.person1):
        logger.error(f"Person 1 file not found: {args.person1}")
        return False
    
    if not os.path.exists(args.person2):
        logger.error(f"Person 2 file not found: {args.person2}")
        return False
    
    # Process files
    processor = AequitasDataProcessor()
    success = processor.process_excel_files(args.person1, args.person2, args.output)
    
    if success:
        logger.info("Data processing completed successfully!")
        return True
    else:
        logger.error("Data processing failed!")
        return False

if __name__ == '__main__':
    success = main()
    sys.exit(0 if success else 1)