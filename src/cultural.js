/*** CULTURAL ***/

// Database for all cultural resources
const database = {
    category: 'cultural',
    data: [
        {
            title: 'Ethnic Markets',
            resources: [
                {
                    name: 'Arbat Market',
                    url: 'https://maps.app.goo.gl/pAewEADKSSuAAMh87',
                    description: 'Eastern and Russian grocery store that specializes in imported goods such as cheeses, meats, bread, and unique produce and offers a wide variety of products from fresh produce to frozen meals and snacks'
                },
                {
                    name: 'The Best Stop Cajun Market',
                    url: 'https://www.beststopinscott.com/contact/katy-tx/',
                    description: 'Grocery store that specializes in cajun meats and cuisine, such as bondin, crackling, and crawfish pie'
                },
                {
                    name: 'H-Mart',
                    url: 'https://www.hmart.com/',
                    description: 'Largest Asian supermarket chain that specializes in Korean, Japanese, Chinese, and other Asian groceries, produce, seafood, snacks, household items, and skincare'
                },
                {
                    name: 'Fiesta Mart',
                    url: 'https://www.fiestamart.com/',
                    description: 'Latin American supermarket chain with a diverse selection of produce, bakery goods, meats, seafood, etc'
                },
                {
                    name: 'Dolphin Mart',
                    url: 'https://maps.app.goo.gl/WMe9L2LZ11AFfheo7',
                    description: 'Asian grocery store with a variety of products, from prepackaged goods and snacks to fresh produce'
                },
                {
                    name: 'Tinda Filipino Store',
                    url: 'https://www.facebook.com/tindafilipinostore/',
                    description: 'Filipino grocery store with specialty food'
                },
                {
                    name: 'Triveni Supermarket',
                    url: 'https://trivenisupermarket.com/',
                    description: 'South Asian grocery store known for offering authentic Indian spieces, fresh produce, specialty items, halal meats, a bakery, and a food court with Indian meals'
                },
                {
                    name: 'Indian Bazaar and Cafe',
                    url: 'https://maps.app.goo.gl/6odUi85Ntfp9wUWn6',
                    description: 'Casual, welcoming cafe and grocery store for Indian staples including spices, lentils, and snacks'
                },
                {
                    name: 'Keemat Grocers',
                    url: 'https://www.keematgrocers.com/',
                    description: 'Indian groceries and spices market also stocking fresh produce, dried foods and snacks'
                },
                {
                    name: 'Vishala Grocery',
                    url: 'https://www.vishalagrocerytx.com/',
                    description: 'Offers snacks, dairy, and frozen goods stocked at a store with an eatery specializing in Indian groceries'
                },
                {
                    name: 'Triumphant Food Store',
                    url: 'https://maps.app.goo.gl/387ntS97rvfyrhHM7',
                    description: 'Supermarket specializing in traditional meals and products from Africa'
                },
                {
                    name: 'Tawakkul Grocers and Halal Meat',
                    url: 'https://maps.app.goo.gl/yviAP8Aa2RT7asp26',
                    description: 'South Asian/Desi grocery store and butcher shop known for its excellent quality fresh, halal meat (chicken, goat, steak), diverse Asian groceries, and delicious homemade prepared foods like samosas and biryani'
                },
                {
                    name: 'Daiso',
                    url: 'https://daisous.com/?srsltid=AfmBOorG1kqc6l9QyuDBXmPvW1V00ikvvg40n22IQ_007wo3bFgo6D3K',
                    description: 'Japanese retail chain known for its vast selection of unique and affordable household goods, stationary, beauty products, snacks, and quirky lifestyle items'
                },
                {
                    name: '99 Ranch',
                    url: 'https://www.99ranch.com/',
                    description: 'Supermarket chain known for a vast selection of East and Southeast Asian groceries, fresh produce, live seafood, meats, bakery items, prepared foods, and specialty products'
                }
            ]
        },
        {
            title: 'Worship Places',
            resources: [
                {
                    name: 'The Fellowship',
                    url: 'https://thefellowship.org/',
                    description: 'A non-denominational church with multiple Sunday services and programs for kids and students'
                },
                {
                    name: 'Cinco Ranch Church of Christ',
                    url: 'https://www.cincochurch.com/',
                    description: 'Offers Bible classes and worship with no dress code, emphasizing simple, New Testament Christianity'
                },
                {
                    name: 'Grace Fellowship Church',
                    url: 'https://www.whatisgrace.org/',
                    description: 'A large church with a strong focus on youth ministries'
                },
                {
                    name: 'Vien Thong Tu',
                    url: 'https://www.vienthongtu.net/',
                    description: 'Vietnamese Buddhist temple known for its beautiful architecture, peaceful atmosphere, and vibrant community; also offers a popular vegetarian restaurant on weekends, serving delicious vegan food and fostering spiritual growth through meditation and cultural event'
                },
                {
                    name: 'Lien Hoa Temple',
                    url: 'https://www.daotranglienhoa.com/',
                    description: 'Vietnamese Buddhist centers that serve as spiritual hubs for meditation, cultural events, and charitable work, offering teachings in both Vietnamese and English, and fostering community with practices like mindfulness, compassionate living, and shared vegetarian meals'
                },
                {
                    name: 'Texas Teo Chew Temple',
                    url: 'https://www.teochewtemplehouston.com/',
                    description: 'Vietnamese Buddhist temple known for its colorful traditional Chinese architecture, serene atmosphere, and guardian statues'
                },
                {
                    name: 'West Katy Islamic Center',
                    url: 'https://wkic.org/',
                    description: 'Offering daily prayers and community activities and organized for religious, chariable, and educational purposes to serve the Muslim community'
                },
                {
                    name: 'Al-Huda Islamic Center',
                    url: 'https://alhudakaty.org/',
                    description: 'Focuses on religious guidance, education, youth development, and community services for Muslims and non-Muslims in the Katy area'
                },
                {
                    name: 'Gayatri Temple',
                    url: 'https://www.awgphouston.org/',
                    description: 'First permanent Hindu temple in Katy that serves as a central hub for prayer, classes, and gatherings'
                },
                {
                    name: 'Katy Hindu Community',
                    url: 'https://katyhinducommunity.org/',
                    description: 'An organization that hosts events like the annual Sri Sita Rama Kalyana Mahotsavam, often in collaboration with temples'
                },
                {
                    name: 'Shivavishnu Mandir',
                    url: 'https://sdsvmandir.org/',
                    description: 'A Hindu temple serving the local community with daily pujas, major festival celebrations (like Diwali, Navaratri), and spiritual activities for youth and seniors'
                },
                {
                    name: 'Temple Sinai',
                    url: 'https://temple-sinai.shulcloud.com/',
                    description: 'A reform synagogue located near Katy, known for being warm, friendly inclusive, and welcoming to interfaith families, with services and activities for all ages'
                }
            ]
        },
        {
            title: 'Other Places',
            resources: [
                {
                    name: 'Katy Asian Town',
                    url: 'https://katyasiantown.com/en/5-2/',
                    description: 'Shopping center with an Asian supermarket and eateries for dim sum, poke, noodles, hot pot, and more'
                },
                {
                    name: 'Bonjour and Bienvenue French Hub',
                    url: 'https://www.frenchhubhouston.com/',
                    description: 'French language classes and cultural meetups'
                },
                {
                    name: 'Crossing Borders Language Center',
                    url: 'https://www.crossingborderslanguages.com/katy/',
                    description: 'Language school that offers a variety of languages and teaches ESL classes'
                },
                {
                    name: 'Spanish Schoolhouse',
                    url: 'https://spanishschoolhouse.com/',
                    description: 'Spanish preschool language immersion spot'
                },
                {
                    name: 'Happy Mandarin',
                    url: 'https://www.happymandarinkaty.com/',
                    description: 'Mandarin language and immersion classes'
                },
                {
                    name: 'Upasana Kalakendra',
                    url: 'https://www.upasanakalakendra.com/',
                    description: 'Cultural dance studio specializing in South Asian dance styles'
                }
            ]
        }
    ]
};

// Populate page with all cultural resources
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

        // Adjust height of resource site image based on overall size of name and desccription
        // document.querySelector(`#site-img-${s}-${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
    }
}