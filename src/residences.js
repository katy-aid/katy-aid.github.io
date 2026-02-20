/*** RESIDENCES ***/

// Database for all residences
const database = {
    category: 'residences',
    data: [
        {
            title: 'Apartments',
            resources: [
                {
                    name: 'Solea at Cinco Ranch',
                    url: 'https://soleacincoranch.com/?utm_source=google-listing-mybusiness&utm_medium=referral&utm_content=location&hyly_method=w&hyly_channel=pr',
                    description: 'A safe, newly built apartment complex designed for 55+ adults ready to explore and connect with the community around them'
                },
                {
                    name: 'Ivy Point Cinco Ranch',
                    url: 'https://www.ipcincoranch.com/?https://www.ipcincoranch.com/&campaignid=21779991736&adgroupid=167741310385&creative=715713925350&matchtype=p&network=g&device=m&keyword=ivy%20point%20cinco%20ranch&gad_source=1&gad_campaignid=21779991736&gbraid=0AAAAA-T-49gcPVTFACvy9ZzuP52LqiBKu',
                    description: "Active adult apartment that upscales amenities created to entertain and assist in daily needs and social outings necessary for elevating residents' style of living"
                },
                {
                    name: 'The Grand at La Centerra',
                    url: 'https://www.thegrandatlacenterra.com/?utm_knock=GPS&utm_term=the%20grand%20at%20la%20centerra&utm_campaign=The+Grand+at+La+Centerra+-+Search+(Brand)&utm_source=adwords&utm_medium=ppc&hsa_acc=5105463817&hsa_cam=21556413741&hsa_grp=165371243949&hsa_ad=708547715411&hsa_src=g&hsa_tgt=kwd-2339005534257&hsa_kw=the%20grand%20at%20la%20centerra&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21556413741&gbraid=0AAAAAo-sl0-7v5NrxRj6v86R-kAFYEP-d',
                    description: 'Located on La Centerra strip mall, this classic apartment complex allows for easy accessibility to all your shopping needs'
                }
            ]
        },
        {
            title: 'Neighborhoods',
            resources: [
                {
                    name: 'Greenway Village',
                    url: 'https://www.har.com/pricetrends/cinco-ranch-greenway-village-fort-bend-realestate/6935',
                    description: 'A beautiful, family-oriented neighborhood within Cinco Ranch which contains fairly priced homes for the location'
                },
                {
                    name: 'Cinco Ranch West',
                    url: 'https://www.har.com/pricetrends/cinco-ranch-west-realestate/6939',
                    description: 'A classic, well-planned neighborhood in the heart of Cinco Ranch, perfect for families looking to settle down into their long-term homes'
                }
            ]
        }
    ]
};

// Populate with all residences
let cat = database.category;
for (let s = 0; s < database.data.length; s++) { // Iterates through each subcategory withing database
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