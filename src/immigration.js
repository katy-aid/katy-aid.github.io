/*** IMMIGRATION ***/

// Database for all immigration resources
const database = {
    category: 'immigration',
    data: [
        {
            title: 'Resources',
            resources: [
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
            ]
        }
    ]
};

// Populate page with all immigration resources
let cat = database.category;
for (let s = 0; s < database.data.length; s++) { // Iterates through each subcategory object within database
    let subcat = database.data[s];
    document.querySelector(`section.${cat}`).innerHTML += `<h2 class="subcategory" id="${s}">${subcat.title}</h2>`;
    if (database.data.length > 1) {
        document.querySelector(`section.cat-btns`).innerHTML += `<a href="#${s}"><button>${subcat.title}</button></a>`;
    }
    for (let i = 0; i < subcat.resources.length; i++) { // Iterates through each resource within subcategory
        let r = subcat.resources[i];
        document.querySelector(`section.${cat}`).innerHTML += `
            <div class="resource">
                <a href="${r.url}" target="_blank">
                    <div class="card">
                        <div id="text-${s}-${i}" class="text">
                            <h3>${r.name}</h3>
                            <p>${r.description}</p>
                        </div>
                        <div id="site-img-${s}-${i}" class="site-img"></div>
                    </div>
                </a>
            </div>
        `;

        // Add image of resource site below its name and description
        document.querySelector(`#site-img-${s}-${i}`).style.setProperty('background', `url("assets/img/sites/${cat}/${subcat.title}/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

        // Access div containing current name and description
        // let text = document.querySelector(`#text-${s}-${i}`);

        // Adjust height of resource site image based on overall size of name and description
        // document.querySelector(`#site-img-${s}-${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
    }
}