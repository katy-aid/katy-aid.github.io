/*** SMALL BUSINESSES ***/

// Database for all small business resources
const database = {
    category: 'businesses',
    data: [
        {
            title: 'Local and Family-Run Businesses',
            resources: [
                {
                    name: 'Farmers Market On Grand Parkway',
                    url: 'http://www.farmersmarketongrandparkway.com/',
                    description: 'Small outdoor market selling organic and local produce, eggs, honey, and baked goods along with a wide selection of artisan food and goods'
                },
                {
                    name:'Cobblestone Cottage',
                    url: 'https://shopcobblestonecottage.com/',
                    description: 'Local family-owned gift and decor boutique'
                },
                {
                    name: 'Loves Dumpling House',
                    url: 'https://www.lovesdumplinghouse.com/',
                    description: 'Family-run Chinese dumpling and noodle house'
                },
                {
                    name: 'Katy Printers',
                    url: 'https://ktprinters.com/',
                    description: 'Friendly, family-owned print shop turning out business cards, brochures, envelopes, and banners'
                },
                {
                    name: 'Mockingbird Books',
                    url: 'https://mockingbirdbookskaty.com/',
                    description: 'Cozy, independent bookstore focused on building community through books, coffee, wine, and events'
                },
                {
                    name: 'Painted Tree Boutiques',
                    url: 'https://paintedtree.com/',
                    description: 'A multi-vendor retail marketplace where numerous small businesses and local artisans rent individual booths to sell unique goods like clothing, home decor, jewelry, and gifts'
                },
                {
                    name: 'Chilled Cryospa',
                    url: 'https://cryospakaty.com/',
                    description: 'A wellness center offering cryotherapy and holistic therapies like red light therapy, compression therapy, chiropractic care, and IV hydration'
                },
                {
                    name: 'Local Table',
                    url: 'https://eatatlocaltable.com/locations/cinco-ranch/',
                    description: 'Family-owned restaurant chain known for fresh, scratch-made American cuisine in a family-friendly yet upscale setting'
                },
                {
                    name: 'Teal Poppy',
                    url: 'https://tealpoppy.com/?srsltid=AfmBOorjYYZ6ZU6Cv2yqwf3MrgG-GTG8H9x7YXEkbGhpwxTKiEZImGQJ',
                    description: "Women's boutique known for cute, hand-picked clothing acccessories, and gifts"
                },
                {
                    name: 'Buzz and Bites',
                    url: 'http://www.buzzandbites.com/',
                    description: 'Family-owned restaurant serving burgers, waffles, croissants, and wine'
                },
                {
                    name: 'Steam Dumpling',
                    url: 'https://chowbusmkt.wixsite.com/website-275',
                    description: 'Chinese restaurant known for its variety of freshly made, authentic dumplings and other Chinese specialties'
                },
                {
                    name: "What's Poppin Popcorn",
                    url: 'https://whatspoppinpopcorn.co/',
                    description: 'Small, local popcorn store selling a large selection of popcorn in sweet, savory, and creative flavors'
                }
            ]
        },
        {
            title: 'Help in Starting a Small Business',
            resources: [
                {
                    name: 'Katy Area Economic Development Council',
                    url: 'https://www.katyedc.org/',
                    description: 'A nonprofit that fosters economic growth by attracting and expanding high-quality businesses, creating jobs and supporting local companies'
                },
                {
                    name: 'Fort Bend Small Business Development Center',
                    url: 'https://www.sbdc.uh.edu/sbdc/Fort_Bend_County_SBDC.asp',
                    description: 'A nonprofit prodividng free, confidential business consulting and training for small businesses'
                },
                {
                    name: "The Governor's Office of Small Business Assistance and the Business Permit Office",
                    url: 'https://gov.texas.gov/business/page/small-business',
                    description: 'Provides resources, guidance, and information to help entrepreneurs and small businesses start, operate, and grow'
                },
                {
                    name: "Katy Area Chamber of Commerce",
                    url: 'https://www.katychamber.com/',
                    description: 'Business advocacy group, serving businesses by promoting economic growth, offering networking, and providing resources'
                },
                {
                    name: 'BNI Cinco Ranch',
                    url: 'https://www.bnicincoranch.com/',
                    description: 'A local chapter of the global Business Network International (BNI) organization, focused on helping business professionals grow their bsuinesses'
                },
                {
                    name: "Women's Council of Entrepreneurs (WCE) - Katy Chapter",
                    url: 'https://www.wearewce.com/Katy-Texas',
                    description: 'Connects local women business owners in a supportive, trust-building community through events and by offering resources and networking'
                },
                {
                    name: 'POP UP SHOPS',
                    url: 'https://www.popupshops.com/',
                    description: 'An online marketplace connecting brands and retailers with landlords to find and book short-term, flexible retail spaces'
                }
            ]
        },
        {
            title: 'Places to Set Up Local Vendors',
            resources: [
                {
                    name: 'Smith Ranch',
                    url: 'http://www.smithranchkaty.com/',
                    description: 'Hosts large-scale community events and actively recruits food trucks, small businesses, and artisans'
                },
                {
                    name: 'Thrive Creative Artisan Market',
                    url: 'https://mythrivemkt.com/',
                    description: 'A curated market seeking artisans and small businesses for specific dates'
                },
                {
                    name: 'La Centerra',
                    url: 'https://lacenterra.com/',
                    description: 'A popular outdoor shopping center that hosts large seasonal markets and events, offering spots for local vendors, pop-ups, and small businesses'
                }
            ]
        }
    ]
};

// Populate page with all small business resources
let cat = database.category;
for (let s = 0; s < database.data.length; s++) { // Iterates through each subcategory object within database
    let subcat = database.data[s];
    document.querySelector(`section.${cat}`).innerHTML += `<h2 class="subcategory">${subcat.title}</h2>`;
    for (let i = 0; i < subcat.resources.length; i++) { // Iterates through each resource within subcategory
        let r = subcat.resources[i];
        document.querySelector(`section.${cat}`).innerHTML += `
            <div class="resource">
                <a href="${r.url}" target="_blank">
                    <div class="card">
                        <div id="text-${s}-${i}" class="text">
                            <h3>${r.name}</h3>
                            <p>${r.description}</h3>
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