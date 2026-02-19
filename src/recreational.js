/*** RECREATIONAL ACTIVITIES ***/

// Database for all recreational activities
const database = {
    category: 'recreational',
    data: [
        {
            title: 'Parks',
            resources: [
                {
                    name: 'Mary Jo Peckham Park',
                    url: 'https://cp4.harriscountytx.gov/Explore/Parks/Precinct-4-Parks/mary-jo-peckham-park',
                    description: 'An amazing opportunity for fresh-air for the whole family, providing an amazing pond view with gym amenities and a playground'
                },
                {
                    name: 'Willow Fork Park',
                    url: 'https://www.willowforkdrainagedistrict.com/parks-trails/willow-fork-park/',
                    description: 'Offers a vast area of exploration with a butterfly garden, ultimate frisbee courses, and an expansive walkway that provides the perfect opportunity for a day spent outside'
                },
                {
                    name: 'Typhoon Texas',
                    url: 'https://typhoontexas.com/houston/',
                    description: "An accessible waterpark for the whole family to enjoy a hot summer's day in the best way possible, with an inexpensive ticket and time spent with loved ones"
                }
            ]
        },
        {
            title: 'Shopping Centers',
            resources: [
                {
                    name: 'Katy Mills Mall',
                    url: 'https://www.simon.com/mall/katy-mills',
                    description: 'A conveniently located shopping center, perfect for day to day essentials while also providing a fun outing as a family'
                },
                {
                    name: 'La Centerra',
                    url: 'https://lacenterra.com/',
                    description: 'A beautiful outdoor shopping center and the ideal place to do upscale shopping dining, and entertainment within the Katy area'
                },
                {
                    name: 'Katy Asia Town',
                    url: 'https://katyasiantown.com/en/5-2/',
                    description: 'A vibrant, culture-rich shopping center in the Katy Area'
                }
            ]
        }
    ]
};

// Populate page with all recreational activities
let cat = database.category;
for (let s = 0; s < database.data.length; s++) { // Iterates through each subcategory object within database
    let subcat = database.data[s];
    document.querySelector(`section.${cat}`).innerHTML += `<h2 class="subcategory">${subcat.title}</h2>`;
    for (let i = 0; i < subcat.resources.lenggth; i++) { // Iterates through each resource within subcategory
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