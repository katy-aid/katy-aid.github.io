/*** SMALL BUSINESSES ***/

// Database for small business resources
const local = [
    {
        name: 'Farmers Market On Grand Parkway',
        url: '',
        description: 'Small outdoor market selling organic and local produce, eggs, honey, and baked goods along with a wide selection of artisan food and goods'
    },
    {
        name:'Cobblestone Cottage',
        url: '',
        description: 'Local family-owned gift and decor boutique'
    },
    {
        name: 'Loves Dumpling House',
        url: '',
        description: 'Family-run Chinese dumpling and noodle house'
    },
    {
        name: 'Katy Printers',
        url: '',
        description: 'Friendly, family-owned print shop turning out business cards, brochures, envelopes, and banners'
    },
    {
        name: 'Mockingbird Books',
        url: '',
        description: 'Cozy, independent bookstore focused on building community through books, coffee, wine, and events'
    },
    {
        name: 'Painted Tree Boutiques',
        url: '',
        description: 'A multi-vendor retail marketplace where numerous small businesses and local artisans rent individual booths to sell unique goods like clothing, home decor, jewelry, and gifts'
    },
    {
        name: 'Chilled Cryospa',
        url: '',
        description: 'A wellness center offering cryotherapy and holistic therapies like red light therapy, compression therapy, chiropractic care, and IV hydration'
    },
    {
        name: 'Local Table',
        url: '',
        description: 'Family-owned restaurant chain known for fresh, scratch-made American cuisine in a family-friendly yet upscale setting'
    },
    {
        name: 'Teal Poppy',
        url: '',
        description: "Women's boutique known for cute, hand-picked clothing acccessories, and gifts"
    },
    {
        name: 'Buzz and Bites',
        url: '',
        description: 'Family-owned restaurant serving burgers, waffles, croissants, and wine'
    },
    {
        name: 'Steam Dumpling',
        url: '',
        description: 'Chinese restaurant known for its variety of freshly made, authentic dumplings and other Chinese specialties'
    },
    {
        name: "What's Poppin Popcorn",
        url: '',
        description: 'Small, local popcorn store selling a large selection of popcorn in sweet, savory, and creative flavors'
    },
    {
        name: 'The Refinery Market',
        url: '',
        description: 'A family-friendly community market, featuring local vendors, food trucks, live music, and family activities like face painting'
    }
];
const help = [
    {
        name: 'Katy Area Economic Development Council',
        url: '',
        description: 'A nonprofit that fosters economic growth by attracting and expanding high-quality businesses, creating jobs and supporting local companies'
    },
    {
        name: 'Fort Bend Small Business Development Center',
        url: '',
        description: 'A nonprofit prodividng free, confidential business consulting and training for small businesses'
    },
    {
        name: "The Governor's Office of Small Business Assistance and the Business Permit Office",
        url: '',
        description: 'Provides resources, guidance, and information to help entrepreneurs and small businesses start, operate, and grow'
    },
    {
        name: "Katy Area Chamber of Commerce",
        url: '',
        description: 'Business advocacy group, serving businesses by promoting economic growth, offering networking, and providing resources'
    },
    {
        name: 'BNI Cinco Ranch',
        url: '',
        description: 'A local chapter of the global Business Network International (BNI) organization, focused on helping business professionals grow their bsuinesses'
    },
    {
        name: "Women's Council of Entrepreneurs (WCE) - Katy Chapter",
        url: '',
        description: 'Connects local women business owners in a supportive, trust-building community through events and by offering resources and networking'
    },
    {
        name: 'POPUPSHOPS',
        url: '',
        description: 'An online marketplace connecting brands and retailers with landlords to find and book short-term, flexible retail spaces'
    }
];
const places = [
    {
        name: 'Smith Ranch',
        url: '',
        description: 'Hosts large-scale community events and actively recruits food trucks, small businesses, and artisans'
    },
    {
        name: 'Thrive Creative Artisan Market',
        url: '',
        description: 'A curated market seeking artisans and small businesses for specific dates'
    },
    {
        name: 'La Centerra',
        url: '',
        description: 'A popular outdoor shopping center that hosts large seasonal markets and events, offering spots for local vendors, pop-ups, and small businesses'
    }
];

// Populate page with local/family-run businesses
document.querySelector(`section.businesses`).innerHTML += `<h2 class="subcategory">Local and Family-Run Businesses</h2>`;
for (let i = 0; i < local.length; i++) {
    let r = local[i];
    document.querySelector(`section.businesses`).innerHTML += `
        <div class="resource">
            <a href="${r.url}" target="_blank">
                <div class="card">
                    <div id="text${i}" class="text">
                        <h3>${r.name}</h3>
                        <p>${r.description}</h3>
                    </div>
                    <div id="site-img${i}" class="site-img"></div>
                </div>
            </a>
        </div>
    `;

    // Add image of resource site below its name and description
    document.querySelector(`#site-img${i}`).style.setProperty('background', `url("assets/img/sites/businesses/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}

// Populate page with help in starting a small businesses
document.querySelector(`section.businesses`).innerHTML += `<h2 class="subcategory">Help in Starting a Small Business</h2>`;
for (let i = 0; i < help.length; i++) {
    let r = help[i];
    document.querySelector(`section.businesses`).innerHTML += `
        <div class="resource">
            <a href="${r.url}" target="_blank">
                <div class="card">
                    <div id="text${i + local.length}" class="text">
                        <h3>${r.name}</h3>
                        <p>${r.description}</p>
                    </div>
                    <div id="site-img${i + local.length}" class="site-img"></div>
                </div>
            </a>
        </div>
    `;

    // Add image of resource site below its name and description
    document.querySelector(`#site-img${i + local.length}`).style.setProperty('background', `url("assets/img/sites/businesses/${i + local.length}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i + local.length}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i + local.length}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}

// Populate page with places to set up local vendors, pop-ups, small businesses, etc
document.querySelector(`section.businesses`).innerHTML += `<h2 class="subcategory">Places to Set Up Local Vendors</h2>`;
for (let i = 0; i < places.length; i++) {
    let r = places[i];
    document.querySelector(`section.businesses`).innerHTML += `
        <div class="resource">
            <a href="${r.url}" target="_blank">
                <div class="card">
                    <div id="text${i + local.length + help.length}" class="text">
                        <h3>${r.name}</h3>
                        <p>${r.description}</p>
                    </div>
                    <div id="site-img${i + local.length + help.length}" class="site-img"></div>
                </div>
            </a>
        </div>
    `;

    // Add image of resource site below its name and description
    document.querySelector(`#site-img${i + local.length + help.length}`).style.setProperty('background', `url("assets/img/sites/businesses/${i + local.length + help.length}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i + local.length + help.length}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i + local.length + help.length}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}