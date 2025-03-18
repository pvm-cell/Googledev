 // Sample company data (replace with actual API data)
const companies = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25 },
    { symbol: 'MSFT', name: 'Microsoft', price: 290.85 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.30 },
    { symbol: 'AMZN', name: 'Amazon', price: 3300.45 },
    { symbol: 'META', name: 'Meta Platforms', price: 330.12 },
    { symbol: 'TSLA', name: 'Tesla', price: 750.25 },
    { symbol: 'NVDA', name: 'NVIDIA', price: 420.15 },
    { symbol: 'JPM', name: 'JPMorgan Chase', price: 150.80 },
    { symbol: 'V', name: 'Visa Inc.', price: 220.45 },
    { symbol: 'WMT', name: 'Walmart', price: 140.90 }
];

// Function to create company cards
function createCompanyCard(company) {
    const card = document.createElement('div');
    card.className = 'company-card';
    card.innerHTML = `
        <h3>&gt; ${company.name}</h3>
        <p>ID: ${company.symbol}</p>
        <p class="stock-price">$${company.price.toFixed(2)} USD</p>
    `;
    card.addEventListener('click', () => showCompanyNews(company));
    return card;
}

// Display top 5 companies
function displayTopCompanies() {
    const topCompaniesContainer = document.getElementById('topCompanies');
    companies.slice(0, 5).forEach(company => {
        topCompaniesContainer.appendChild(createCompanyCard(company));
    });
}

// Display all companies
function displayAllCompanies() {
    const allCompaniesContainer = document.getElementById('allCompanies');
    companies.slice(5).forEach(company => {
        allCompaniesContainer.appendChild(createCompanyCard(company));
    });
}

// Modal functionality
const modal = document.getElementById('newsModal');
const closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Show company news
async function showCompanyNews(company) {
    const modalCompanyName = document.getElementById('modalCompanyName');
    const newsContent = document.getElementById('newsContent');
    
    modalCompanyName.textContent = `${company.name} News`;
    newsContent.innerHTML = '<p>Loading news...</p>';
    modal.style.display = "block";

    try {
        // Replace with actual API call
        const sampleNews = [
            {
                title: `${company.name} Reports Strong Q2 Earnings`,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                date: '2024-03-20'
            },
            {
                title: `${company.name} Announces New Product Launch`,
                description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                date: '2024-03-19'
            }
        ];

        newsContent.innerHTML = sampleNews.map(news => `
            <div class="news-item">
                <h3>&gt; ${news.title}</h3>
                <p>${news.description}</p>
                <small>[${news.date}]</small>
            </div>
        `).join('');
    } catch (error) {
        newsContent.innerHTML = '<p>Error loading news. Please try again later.</p>';
    }
}

// Initialize the display
displayTopCompanies();
displayAllCompanies(); 
// Update the createCompanyCard function
function createCompanyCard(company) {
    const card = document.createElement('div');
    card.className = 'company-card';
    card.innerHTML = `
        <h3>&gt; ${company.name}</h3>
        <p>ID: ${company.symbol}</p>
        <p class="stock-price">$${company.price.toFixed(2)} USD</p>
    `;
    card.addEventListener('click', () => showCompanyNews(company));
    return card;
}

// Update the showCompanyNews function's news template
newsContent.innerHTML = sampleNews.map(news => `
    <div class="news-item">
        <h3>&gt; ${news.title}</h3>
        <p>${news.description}</p>
        <small>[${news.date}]</small>
    </div>
`).join('');