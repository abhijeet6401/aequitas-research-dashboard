/* 
* Aequitas Research Dashboard Styling
* Based on Aequitas Investment Consultancy brand guidelines
* Created for Research Consolidation Project
*/

/* ----------------- VARIABLES & RESET ----------------- */
:root {
    /* Aequitas Brand Colors */
    --primary-teal: #218088;
    --secondary-teal: #1a666b;
    --accent-teal: #2a9ca6;
    --light-teal: #ebf5f6;
    --warm-gray: #5e5240;
    --light-gray: #f5f7fa;
    --medium-gray: #e1e5eb;
    --dark-gray: #343a40;
    
    /* Status Colors */
    --high-priority: #c0152f;
    --medium-priority: #f9a03f;
    --low-priority: #10b981;
    
    /* Typography */
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-secondary: 'Georgia', serif;
    
    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-xxl: 3rem;
    
    /* Card Shadows */
    --card-shadow: 0 2px 8px rgba(0,0,0,0.1);
    --card-shadow-hover: 0 6px 12px rgba(0,0,0,0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-primary);
    background-color: var(--light-gray);
    color: var(--dark-gray);
    line-height: 1.5;
    padding-bottom: var(--space-md);
}

/* ----------------- TYPOGRAPHY ----------------- */
h1, h2, h3, h4, h5 {
    font-weight: 600;
    line-height: 1.2;
}

h1 {
    font-size: 1.75rem;
    color: white;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: var(--space-md);
    color: var(--primary-teal);
}

h3 {
    font-size: 1.25rem;
    margin-bottom: var(--space-md);
}

.subtitle {
    font-size: 0.9rem;
    opacity: 0.9;
    color: white;
}

/* ----------------- HEADER & NAVIGATION ----------------- */
.dashboard-header {
    background: linear-gradient(135deg, var(--primary-teal) 0%, var(--secondary-teal) 100%);
    color: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--space-lg) var(--space-xl);
}

.header-left {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    margin-right: var(--space-md);
}

.header-right {
    display: flex;
    align-items: center;
    gap: var(--space-xl);
}

.date-display {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.9rem;
    background-color: rgba(255, 255, 255, 0.2);
    padding: var(--space-sm) var(--space-md);
    border-radius: 4px;
}

.stats-summary {
    display: flex;
    gap: var(--space-lg);
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
}

.stat-label {
    font-size: 0.8rem;
    opacity: 0.8;
}

/* Nav Tabs */
.nav-tabs {
    background-color: white;
    border-bottom: 1px solid var(--medium-gray);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    overflow-x: auto;
}

.nav-tab {
    padding: var(--space-md) var(--space-lg);
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--dark-gray);
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    border-bottom: 3px solid transparent;
}

.nav-tab:hover {
    opacity: 1;
    background-color: var(--light-gray);
}

.nav-tab.active {
    opacity: 1;
    font-weight: 600;
    border-bottom: 3px solid var(--primary-teal);
}

.nav-tab i {
    margin-right: var(--space-sm);
}

/* ----------------- FILTERS ----------------- */
.filter-section {
    background-color: white;
    padding: var(--space-md);
    border-bottom: 1px solid var(--medium-gray);
}

.filter-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-md);
}

.search-box {
    position: relative;
    flex: 1;
    min-width: 250px;
}

.search-box input {
    width: 100%;
    padding: var(--space-md) var(--space-md) var(--space-md) 2.5rem;
    border: 1px solid var(--medium-gray);
    border-radius: 4px;
    font-size: 0.9rem;
}

.search-box i {
    position: absolute;
    left: var(--space-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--warm-gray);
}

.filter-controls {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
}

.filter-select {
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--medium-gray);
    border-radius: 4px;
    background-color: white;
    font-size: 0.9rem;
    min-width: 140px;
}

.export-btn {
    background-color: var(--primary-teal);
    color: white;
    border: none;
    border-radius: 4px;
    padding: var(--space-sm) var(--space-md);
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.export-btn:hover {
    background-color: var(--secondary-teal);
}

/* ----------------- MAIN CONTENT ----------------- */
.main-content {
    max-width: 1400px;
    margin: var(--space-lg) auto;
    padding: 0 var(--space-lg);
}

.view-section {
    display: none;
}

.view-section.active {
    display: block;
}

/* Priority Summary Cards */
.priority-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-xl);
}

.priority-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: var(--card-shadow);
    padding: var(--space-lg);
    position: relative;
    overflow: hidden;
}

.priority-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
}

.high-priority::before {
    background-color: var(--high-priority);
}

.medium-priority::before {
    background-color: var(--medium-priority);
}

.low-priority::before {
    background-color: var(--low-priority);
}

.priority-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-sm);
}

.priority-count {
    background-color: var(--light-gray);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}

/* Topics Grid */
.topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: var(--space-lg);
}

.topic-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: var(--card-shadow);
    padding: var(--space-lg);
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

.topic-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--card-shadow-hover);
}

.topic-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
}

.topic-card.high-priority::before {
    background-color: var(--high-priority);
}

.topic-card.medium-priority::before {
    background-color: var(--medium-priority);
}

.topic-card.low-priority::before {
    background-color: var(--low-priority);
}

.topic-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--space-md);
}

.topic-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--dark-gray);
}

.topic-priority {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
    color: white;
}

.high {
    background-color: var(--high-priority);
}

.medium {
    background-color: var(--medium-priority);
}

.low {
    background-color: var(--low-priority);
}

.topic-meta {
    display: flex;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
    font-size: 0.85rem;
    color: var(--warm-gray);
}

.topic-sector, .topic-analysts {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.topic-preview {
    margin-bottom: var(--space-md);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.9rem;
}

.topic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--medium-gray);
    padding-top: var(--space-md);
    font-size: 0.85rem;
}

.topic-sources {
    color: var(--warm-gray);
}

.topic-impact {
    font-weight: 600;
    color: var(--primary-teal);
}

/* Sector View */
.sector-analysis {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
}

.chart-container {
    background-color: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: var(--card-shadow);
}

.sector-details {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.sector-item {
    background-color: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: var(--card-shadow);
    display: flex;
    align-items: center;
    gap: var(--space-lg);
}

.sector-icon {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--light-teal);
    color: var(--primary-teal);
}

.sector-info {
    flex: 1;
}

.sector-count {
    font-size: 0.85rem;
    color: var(--warm-gray);
}

.sector-topics {
    margin-top: var(--space-sm);
}

/* Analyst View */
.analyst-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
}

.analyst-card {
    background-color: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: var(--card-shadow);
}

.analyst-stats {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
}

.stat {
    font-size: 0.9rem;
    padding: var(--space-xs) var(--space-sm);
    background-color: var(--light-teal);
    border-radius: 4px;
    color: var(--primary-teal);
}

.analyst-topics {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.analyst-topic-item {
    display: flex;
    justify-content: space-between;
    padding: var(--space-md);
    border: 1px solid var(--medium-gray);
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.analyst-topic-item:hover {
    background-color: var(--light-teal);
}

.analyst-topic-title {
    font-weight: 500;
}

.analyst-topic-priority {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
    color: white;
}

/* Timeline View */
.timeline-container {
    background-color: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: var(--card-shadow);
}

.timeline {
    position: relative;
    margin-top: var(--space-xl);
}

.timeline:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--medium-gray);
}

.timeline-item {
    position: relative;
    padding-left: var(--space-xl);
    padding-bottom: var(--space-xl);
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-item:before {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--primary-teal);
    border: 2px solid white;
}

.timeline-time {
    font-size: 0.8rem;
    color: var(--warm-gray);
    margin-bottom: var(--space-xs);
}

.timeline-title {
    font-weight: 600;
    margin-bottom: var(--space-xs);
}

.timeline-content {
    background-color: var(--light-gray);
    padding: var(--space-md);
    border-radius: 6px;
}

/* ----------------- MODALS ----------------- */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    overflow: auto;
}

.modal-content {
    background-color: white;
    border-radius: 8px;
    width: 90%;
    max-width: 700px;
    max-height: 85vh;
    overflow: auto;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    animation: modalFade 0.3s;
}

@keyframes modalFade {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.modal-header {
    padding: var(--space-lg);
    border-bottom: 1px solid var(--medium-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-body {
    padding: var(--space-lg);
    max-height: 65vh;
    overflow: auto;
}

.modal-close {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--dark-gray);
}

/* Topic Detail Modal */
.topic-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-lg);
}

.topic-detail-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
    font-size: 0.9rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.meta-item i {
    color: var(--primary-teal);
}

.key-points {
    margin-bottom: var(--space-lg);
}

.key-points h3 {
    margin-bottom: var(--space-md);
}

.key-point-item {
    position: relative;
    padding-left: var(--space-lg);
    margin-bottom: var(--space-md);
}

.key-point-item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--primary-teal);
}

.analyst-attribution {
    margin-top: var(--space-lg);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--medium-gray);
}

.attribution-item {
    padding: var(--space-md);
    background-color: var(--light-gray);
    border-radius: 6px;
    margin-bottom: var(--space-md);
}

.attribution-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
}

.attribution-source {
    color: var(--warm-gray);
    font-size: 0.8rem;
}

/* Export Modal */
.export-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-lg);
}

.export-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--medium-gray);
    border-radius: 8px;
    padding: var(--space-lg);
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s;
}

.export-option:hover {
    background-color: var(--light-teal);
    border-color: var(--primary-teal);
}

.export-option i {
    font-size: 2rem;
    color: var(--primary-teal);
    margin-bottom: var(--space-md);
}

/* ----------------- LOADING SPINNER ----------------- */
.loading-spinner {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 3000;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid var(--light-teal);
    border-radius: 50%;
    border-top: 4px solid var(--primary-teal);
    animation: spin 1s linear infinite;
    margin-bottom: var(--space-md);
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* ----------------- FOOTER ----------------- */
.dashboard-footer {
    background-color: white;
    border-top: 1px solid var(--medium-gray);
    margin-top: var(--space-xxl);
    padding: var(--space-lg) 0;
}

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--space-xl);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-md);
}

.footer-left p, .footer-right p {
    font-size: 0.9rem;
    color: var(--warm-gray);
}

/* ----------------- RESPONSIVE DESIGN ----------------- */
@media (max-width: 1200px) {
    .sector-analysis,
    .analyst-comparison {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .header-container,
    .filter-container {
        flex-direction: column;
        align-items: stretch;
        gap: var(--space-md);
    }
    
    .header-right {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .priority-summary {
        grid-template-columns: 1fr;
    }
    
    .topics-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .nav-container {
        justify-content: flex-start;
        padding: 0 var(--space-xs);
    }
    
    .nav-tab {
        padding: var(--space-sm) var(--space-md);
        font-size: 0.9rem;
    }
    
    .main-content {
        padding: 0 var(--space-md);
    }
}