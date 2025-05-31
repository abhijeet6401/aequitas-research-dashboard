// Aequitas Research Dashboard - JavaScript Functionality

// Application Data (from JSON)
const researchData = {
  "metadata": {
    "date": "2025-05-31",
    "total_items": 16,
    "consolidated_items": 12,
    "deduplication_rate": 25.0,
    "analysts": ["Person 1", "Person 2"],
    "sectors_covered": ["Trade & Policy", "Healthcare", "Banking", "Financial Services", "Fintech", "Automotive", "Power & Utilities", "Technology", "Energy"]
  },
  "consolidated_topics": [
    {
      "id": "consolidated_1",
      "title": "India-UK FTA",
      "priority": "high",
      "sector": "Trade & Policy",
      "analysts": ["Person 2", "Person 1"],
      "companies": ["Multiple Sectors"],
      "key_points": ["Bilateral trade projected to reach $120B by 2030. Whisky tariffs reduced from 150% to 75%, eventually to 40%. Social security exemption benefits 60,000+ IT employees.", "Trade deal will make whisky, gin, automobiles, medical devices cheaper. 99% of UK products get tariff elimination. Social security exemption saves 20% of salaries for Indian workers."],
      "sources": ["Economic Times", "Business Standard"],
      "date": "2025-05-31",
      "impact_score": 85
    },
    {
      "id": "consolidated_2",
      "title": "Bank of Baroda Results",
      "priority": "medium",
      "sector": "Banking",
      "analysts": ["Person 2", "Person 1"],
      "companies": ["Bank of Baroda"],
      "key_points": ["Net profit up 3.3% to ₹5,048 crore in Q4. NIM contracted to 3.02% from 3.18% YoY. Cost of deposits peaked in March quarter but moderating since.", "Net profit rose 3.3% YoY to ₹5,048 crore. NIM contracted 40 bps due to elevated deposit costs. Treasury income doubled to ₹1,559 crore."],
      "sources": ["Economic Times", "Business Standard"],
      "date": "2025-05-31",
      "impact_score": 70
    },
    {
      "id": "consolidated_3",
      "title": "Stock Exchange Results",
      "priority": "medium",
      "sector": "Financial Services",
      "analysts": ["Person 2", "Person 1"],
      "companies": ["BSE", "NSE"],
      "key_points": ["Consolidated profit of ₹2,650 crore, down 31% sequentially. Revenue declined 13.3% to ₹3,771 crore due to reduced volumes in cash and derivatives.", "Net profit soared 125.8% to ₹493.7 crore in Q4. Revenue rose 10.2% to ₹846.6 crore. Profit up 362% YoY, revenue jumped 75% YoY.", "BSE profit jumped 5x to ₹494 crore. NSE profit at ₹2,650 crore, down 31% sequentially. Revenue growth driven by transaction charges."],
      "sources": ["Economic Times", "Business Standard"],
      "date": "2025-05-31",
      "impact_score": 70
    },
    {
      "id": "individual_2",
      "title": "US Pharma Domestic Push",
      "priority": "medium",
      "sector": "Healthcare",
      "analysts": ["Person 1"],
      "companies": ["Pharmaceuticals"],
      "key_points": ["Trump executive order to promote domestic drug manufacturing. FDA directed to expedite approval process for new domestic pharmaceutical plants."],
      "sources": ["Business Standard"],
      "date": "2025-05-31",
      "impact_score": 60
    },
    {
      "id": "individual_4",
      "title": "PE/VC Landscape Intensification",
      "priority": "medium",
      "sector": "Financial Services",
      "analysts": ["Person 1"],
      "companies": ["Private Equity"],
      "key_points": ["Number of PEs in India increased 60-65% between 2016-2024. Buyouts share rose from 37% in 2022 to 51% in 2024. 83% of deals over 5 years old expected for exits in 2025."],
      "sources": ["Business Standard"],
      "date": "2025-05-31",
      "impact_score": 60
    },
    {
      "id": "individual_5",
      "title": "Paytm Q4 Loss",
      "priority": "medium",
      "sector": "Fintech",
      "analysts": ["Person 1"],
      "companies": ["Paytm"],
      "key_points": ["Consolidated loss of ₹545 crore vs ₹550 crore YoY. One-time ESOP expense of ₹492 crore. MTUs dropped 25% YoY. UPI incentives down to ₹70 crore from ₹288 crore."],
      "sources": ["Business Standard"],
      "date": "2025-05-31",
      "impact_score": 60
    },
    {
      "id": "individual_6",
      "title": "Tata Motors Split Approved",
      "priority": "medium",
      "sector": "Automotive",
      "analysts": ["Person 1"],
      "companies": ["Tata Motors"],
      "key_points": ["Shareholders approved plan to split automaker into two listed companies, separating passenger and commercial vehicle arms including JLR brand."],
      "sources": ["Business Standard"],
      "date": "2025-05-31",
      "impact_score": 60
    },
    {
      "id": "individual_7",
      "title": "Adani Power Thermal Deal",
      "priority": "medium",
      "sector": "Power & Utilities",
      "analysts": ["Person 1"],
      "companies": ["Adani Power"],
      "key_points": ["Secured 1,500 MW thermal contract with UP at ₹5.383/unit for 25 years. Fixed charge ₹3.727/unit, fuel charge ₹1.656/unit."],
      "sources": ["Business Standard"],
      "date": "2025-05-31",
      "impact_score": 60
    },
    {
      "id": "individual_10",
      "title": "MUFG-HDFC Bank Deal",
      "priority": "high",
      "sector": "Banking",
      "analysts": ["Person 2"],
      "companies": ["HDFC Bank", "MUFG"],
      "key_points": ["MUFG in advanced talks to buy minority stake in HDB Financial Services for ₹12,000 crore. Seeking up to 19% stake. HDB valuation declined to $8-8.5B from $10-12B."],
      "sources": ["Economic Times"],
      "date": "2025-05-31",
      "impact_score": 80
    },
    {
      "id": "individual_11",
      "title": "Uber-Trendyol Acquisition",
      "priority": "medium",
      "sector": "Technology",
      "analysts": ["Person 2"],
      "companies": ["Uber", "Trendyol"],
      "key_points": ["Uber agreed to buy 85% of Turkish delivery platform for $700M. Trendyol delivered 200M+ orders in 2024, generating $2B gross bookings."],
      "sources": ["Economic Times"],
      "date": "2025-05-31",
      "impact_score": 60
    },
    {
      "id": "individual_15",
      "title": "Oil Prices Surge",
      "priority": "medium",
      "sector": "Energy",
      "analysts": ["Person 2"],
      "companies": ["Oil & Gas"],
      "key_points": ["Oil climbed 4% on higher demand in Europe/China and Middle East tensions. Brent rose to $62.60, WTI gained to $59.55."],
      "sources": ["Economic Times"],
      "date": "2025-05-31",
      "impact_score": 60
    },
    {
      "id": "individual_16",
      "title": "TPG-SCHOTT Poonawalla Deal",
      "priority": "medium",
      "sector": "Healthcare",
      "analysts": ["Person 2"],
      "companies": ["SCHOTT Poonawalla", "TPG"],
      "key_points": ["TPG acquired 35% stake from SII. Total investment from TPG and Novo Holdings amounts to $300M. SCHOTT retains 50%, SII holds minority stake."],
      "sources": ["Economic Times"],
      "date": "2025-05-31",
      "impact_score": 60
    }
  ],
  "priority_breakdown": {
    "high": 2,
    "medium": 10,
    "low": 0
  },
  "sector_analysis": {
    "Trade & Policy": 1,
    "Banking": 2,
    "Financial Services": 2,
    "Healthcare": 2,
    "Fintech": 1,
    "Automotive": 1,
    "Power & Utilities": 1,
    "Technology": 1,
    "Energy": 1
  }
};

// Global variables
let currentTopics = researchData.consolidated_topics;
let sectorChart = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('Initializing Aequitas Dashboard...');
        initializeApp();
    } catch (error) {
        console.error('Error initializing app:', error);
        hideLoading();
    }
});

function initializeApp() {
    // Hide loading immediately and start initialization
    hideLoading();
    
    // Set current date
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Initialize statistics
    updateStatistics();
    
    // Populate sector filter
    populateSectorFilter();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Render initial content
    renderTopicsGrid(currentTopics);
    
    // Initialize charts and other components
    setTimeout(() => {
        renderSectorChart();
        renderAnalystComparison();
        renderTimeline();
    }, 100);
}

function updateStatistics() {
    const elements = {
        'highPriorityCount': researchData.priority_breakdown.high,
        'mediumPriorityCount': researchData.priority_breakdown.medium,
        'lowPriorityCount': researchData.priority_breakdown.low,
        'efficiencyRate': researchData.metadata.deduplication_rate + '%'
    };
    
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function populateSectorFilter() {
    const sectorFilter = document.getElementById('sectorFilter');
    if (!sectorFilter) return;
    
    const sectors = researchData.metadata.sectors_covered;
    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorFilter.appendChild(option);
    });
}

function initializeEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter functionality
    const filters = ['priorityFilter', 'sectorFilter', 'analystFilter'];
    filters.forEach(filterId => {
        const element = document.getElementById(filterId);
        if (element) {
            element.addEventListener('change', handleFilters);
        }
    });

    // Export dropdown
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', toggleExportMenu);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('topicModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }

    // Close export menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.export-dropdown')) {
            const exportMenu = document.getElementById('exportMenu');
            if (exportMenu) {
                exportMenu.classList.remove('show');
            }
        }
    });
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) activeTab.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const activeContent = document.getElementById(tabName);
    if (activeContent) activeContent.classList.add('active');
}

function handleSearch() {
    applyFilters();
}

function handleFilters() {
    applyFilters();
}

function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const priorityFilter = document.getElementById('priorityFilter');
    const sectorFilter = document.getElementById('sectorFilter');
    const analystFilter = document.getElementById('analystFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const priorityValue = priorityFilter ? priorityFilter.value : '';
    const sectorValue = sectorFilter ? sectorFilter.value : '';
    const analystValue = analystFilter ? analystFilter.value : '';

    let filteredTopics = researchData.consolidated_topics.filter(topic => {
        const matchesSearch = !searchTerm || 
            topic.title.toLowerCase().includes(searchTerm) ||
            topic.sector.toLowerCase().includes(searchTerm) ||
            topic.companies.some(company => company.toLowerCase().includes(searchTerm)) ||
            topic.key_points.some(point => point.toLowerCase().includes(searchTerm));

        const matchesPriority = !priorityValue || topic.priority === priorityValue;
        const matchesSector = !sectorValue || topic.sector === sectorValue;
        const matchesAnalyst = !analystValue || topic.analysts.includes(analystValue);

        return matchesSearch && matchesPriority && matchesSector && matchesAnalyst;
    });

    currentTopics = filteredTopics;
    renderTopicsGrid(filteredTopics);
}

function renderTopicsGrid(topics) {
    const grid = document.getElementById('topicsGrid');
    if (!grid) return;
    
    if (topics.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                <h3>No topics found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = topics.map(topic => `
        <div class="topic-card priority-${topic.priority}" onclick="openTopicModal('${topic.id}')">
            <div class="topic-header">
                <h3 class="topic-title">${topic.title}</h3>
                <span class="priority-badge ${topic.priority}">${topic.priority}</span>
            </div>
            <div class="topic-meta">
                <span class="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    ${topic.analysts.join(', ')}
                </span>
                <span class="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    ${topic.sector}
                </span>
            </div>
            <div class="topic-preview">
                ${topic.key_points[0].substring(0, 150)}...
            </div>
            <div class="topic-footer">
                <span class="analysts-list">Research by ${topic.analysts.join(' & ')}</span>
                <span class="impact-score">Impact: ${topic.impact_score}</span>
            </div>
        </div>
    `).join('');
}

function openTopicModal(topicId) {
    const topic = researchData.consolidated_topics.find(t => t.id === topicId);
    if (!topic) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modal = document.getElementById('topicModal');
    
    if (!modalTitle || !modalBody || !modal) return;

    modalTitle.textContent = topic.title;
    modalBody.innerHTML = `
        <div class="modal-topic-details">
            <div class="topic-meta-full">
                <div class="meta-row">
                    <strong>Priority:</strong> 
                    <span class="priority-badge ${topic.priority}">${topic.priority}</span>
                </div>
                <div class="meta-row">
                    <strong>Sector:</strong> ${topic.sector}
                </div>
                <div class="meta-row">
                    <strong>Companies:</strong> ${topic.companies.join(', ')}
                </div>
                <div class="meta-row">
                    <strong>Analysts:</strong> ${topic.analysts.join(', ')}
                </div>
                <div class="meta-row">
                    <strong>Impact Score:</strong> ${topic.impact_score}/100
                </div>
            </div>
            
            <div class="key-points-section">
                <h4>Key Research Points</h4>
                <div class="key-points-list">
                    ${topic.key_points.map(point => `<div class="key-point">• ${point}</div>`).join('')}
                </div>
            </div>
            
            <div class="sources-section">
                <h4>Sources</h4>
                <div class="sources-list">
                    ${topic.sources.map(source => `<span class="source-tag">${source}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <style>
            .modal-topic-details { font-size: 14px; }
            .meta-row { margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
            .key-points-section, .sources-section { margin-top: 24px; }
            .key-points-section h4, .sources-section h4 { margin-bottom: 12px; color: var(--aequitas-primary); }
            .key-point { margin-bottom: 8px; line-height: 1.5; }
            .sources-list { display: flex; flex-wrap: wrap; gap: 8px; }
            .source-tag { background: var(--aequitas-light); color: var(--aequitas-primary); padding: 4px 8px; border-radius: 4px; font-size: 12px; }
        </style>
    `;
    
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('topicModal');
    if (modal) modal.classList.remove('show');
}

function renderSectorChart() {
    const canvas = document.getElementById('sectorChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (sectorChart) {
        sectorChart.destroy();
    }
    
    const sectors = Object.keys(researchData.sector_analysis);
    const counts = Object.values(researchData.sector_analysis);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454'];

    sectorChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: sectors,
            datasets: [{
                data: counts,
                backgroundColor: colors.slice(0, sectors.length),
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} topics (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    // Render sector breakdown
    const breakdown = document.getElementById('sectorBreakdown');
    if (breakdown) {
        breakdown.innerHTML = `
            <h3>Sector Breakdown</h3>
            ${sectors.map((sector, index) => `
                <div class="sector-item">
                    <span class="sector-name">${sector}</span>
                    <span class="sector-count">${counts[index]}</span>
                </div>
            `).join('')}
        `;
    }
}

function renderAnalystComparison() {
    const person1Topics = researchData.consolidated_topics.filter(topic => 
        topic.analysts.includes('Person 1')
    );
    const person2Topics = researchData.consolidated_topics.filter(topic => 
        topic.analysts.includes('Person 2')
    );

    // Render Person 1 topics
    const person1Container = document.getElementById('person1Topics');
    if (person1Container) {
        person1Container.innerHTML = person1Topics.map(topic => `
            <div class="analyst-topic-card" onclick="openTopicModal('${topic.id}')">
                <div class="topic-header">
                    <h4>${topic.title}</h4>
                    <span class="priority-badge ${topic.priority}">${topic.priority}</span>
                </div>
                <div class="topic-meta">
                    <span class="meta-item">${topic.sector}</span>
                    <span class="meta-item">Impact: ${topic.impact_score}</span>
                </div>
            </div>
        `).join('');
    }

    // Render Person 2 topics
    const person2Container = document.getElementById('person2Topics');
    if (person2Container) {
        person2Container.innerHTML = person2Topics.map(topic => `
            <div class="analyst-topic-card" onclick="openTopicModal('${topic.id}')">
                <div class="topic-header">
                    <h4>${topic.title}</h4>
                    <span class="priority-badge ${topic.priority}">${topic.priority}</span>
                </div>
                <div class="topic-meta">
                    <span class="meta-item">${topic.sector}</span>
                    <span class="meta-item">Impact: ${topic.impact_score}</span>
                </div>
            </div>
        `).join('');
    }
}

function renderTimeline() {
    const sortedTopics = [...researchData.consolidated_topics].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    const timelineContainer = document.getElementById('timelineContainer');
    if (timelineContainer) {
        timelineContainer.innerHTML = sortedTopics.map(topic => `
            <div class="timeline-item" onclick="openTopicModal('${topic.id}')">
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h4>${topic.title}</h4>
                        <span class="priority-badge ${topic.priority}">${topic.priority}</span>
                    </div>
                    <div class="timeline-meta">
                        <span>${topic.sector} • ${topic.analysts.join(', ')}</span>
                    </div>
                    <div class="timeline-preview">
                        ${topic.key_points[0].substring(0, 100)}...
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function toggleExportMenu() {
    const exportMenu = document.getElementById('exportMenu');
    if (exportMenu) {
        exportMenu.classList.toggle('show');
    }
}

function exportData(format) {
    const exportMenu = document.getElementById('exportMenu');
    if (exportMenu) {
        exportMenu.classList.remove('show');
    }
    
    // Simulate export process
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        showNotification(`Data exported successfully as ${format.toUpperCase()}!`);
    }, 2000);
}

function shareData() {
    const exportMenu = document.getElementById('exportMenu');
    if (exportMenu) {
        exportMenu.classList.remove('show');
    }
    
    // Simulate share link generation
    const shareUrl = `https://aequitas-dashboard.com/share/${Date.now()}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
            showNotification('Share link copied to clipboard!');
        });
    } else {
        showNotification('Share link: ' + shareUrl);
    }
}

function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'flex';
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    if (notification && notificationText) {
        notificationText.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
        const exportMenu = document.getElementById('exportMenu');
        if (exportMenu) {
            exportMenu.classList.remove('show');
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Make functions available globally for onclick handlers
window.openTopicModal = openTopicModal;
window.closeModal = closeModal;
window.exportData = exportData;
window.shareData = shareData;
