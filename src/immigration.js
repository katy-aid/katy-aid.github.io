/*** IMMIGRATION ***/

// Database for immigration resources
const resources = [
    {
        name: 'St. Frances Cabrini Center For Legal Assistance',
        url: 'https://catholiccharities.org/cabrini/',
        description: 'Provides free and low-cost legal assistance for immigrants and refugees, including help with citizenship applications'
    },
    {
        name: 'U.S. Committee for Refugees and Immigrants',
        url: 'https://refugees.org',
        description: 'National non-profit helping refugees, asylum seekers, and trafficking survivors'
    },
    {
        name: 'CWS Houston',
        url: 'https://cwshouston.org',
        description: 'Houston-based aid that provides legal assistance and mental health services for immigrants, refugees and unaccompanied children'
    },
    {
        name: 'Justice For All Immigrants',
        url: 'https://www.justiceforallimmigrants.org',
        description: 'Provides affordable and proper immigration legal services as well as advocacy for low income families'
    },
    {
        name: 'YMCA International Services',
        url: 'https://ymcahouston.org/locations/ymca-international-services',
        description: 'General community outpost for aid and guidance for immigrants'
    },
    {
        name: "Immigrants' Rights Hotline",
        url: 'https://www.aclutx.org/en/campaigns/hotline',
        description: 'Hotline service providing information surrounding immigration laws and providing reminders about rights and civil liberties'
    },
];

// Populate page with immigration resources
for (let i = 0; i < resources.length; i++) {
    let r = resources[i];
    document.querySelector(`section.immigration`).innerHTML += `
        <div class="resource">
            <a href="${r.url}" target="_blank">
                <div class="card">
                    <div id="text${i}" class="text">
                        <h3>${r.name}</h4>
                        <p>${r.description}</p>
                    </div>
                    <div id="site-img${i}" class="site-img"></div>
                </div>
            </a>
        </div>
    `;

    // Add image of resource site below its name and description
    document.querySelector(`#site-img${i}`).style.setProperty('background', `url("assets/img/sites/immigration/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}