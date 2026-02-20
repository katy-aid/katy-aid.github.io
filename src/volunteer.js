/*** VOLUNTEER ***/

// Database for all volunteer opportunities
const database = {
    category: 'volunteer',
    data: [
        {
            title: 'Opportunities',
            resources: [
                {
                    name: 'Ballard House',
                    url: 'https://www.theballardhouse.org',
                    description: 'Offers no-cost temporary housing for individuals and caregivers undergoing treatment'
                },
                {
                    name: 'Sunrise Senior Living Center',
                    url: 'https://www.sunriseseniorliving.com/communities/tx/sunrise-of-cinco-ranch',
                    description: 'A residential community that provides specialized care and services for elderly residents'
                },
                {
                    name: 'Fort Bend Library',
                    url: 'https://www.fortbendlibraries.gov/locations-hours/cinco-ranch',
                    description: "Public library featuring a children's section, study areas, and computers while offering several volunteer opportunities"
                },
                {
                    name: 'Katy Christian Ministries',
                    url: 'https://ktcm.org/',
                    description: 'Nonprofit that offers emergency financial assistance and resiliency programs'
                },
                {
                    name: 'Christ Clinic',
                    url: 'http://www.christclinickaty.org/',
                    description: 'Nonprofit that offers high quality healthcare and health-related services to those who are uninsured or underinsured'
                },
                {
                    name: "Cinco Ranch Alzheimer's Special Care Center",
                    url: 'https://sinceriseniorliving.com/cinco-ranch/',
                    description: "Retirement community dedicated to providing memory care in a secure, supportive environment designed for individuals living with Alzheimer's and dementia"
                },
                {
                    name: 'Legacy at Falcon Point',
                    url: 'https://www.pegasusseniorliving.com/the-legacy-at-falcon-point-in-katy/',
                    description: 'Assisted living and memory care community providing personalized support with daily activities such as line dancing and yoga'
                },
                {
                    name: 'Keep Encouraging Youth toward Success (KEYS) Mentoring',
                    url: 'https://www.katyisd.org/partners-in-education/programs/keys-mentoring',
                    description: 'Katy ISD program that primarily focusees on relationship building, rather than tutoring between a mentor and student'
                },
                {
                    name: 'Katy Heritage Society',
                    url: 'https://www.katyheritagesociety.com/',
                    description: 'Nonprofit dedicated to furthering the educational and cultural development of the community by preserving, restoring, and displaying historical landmarks, natural beauty, documents'
                }
            ]
        }
    ]
};

// Populate page with all volunteer opportunities
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

        // Adjust height of resource site image based on overall size of name and description
        // document.querySelector(`#site-img-${s}-${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
    }
}