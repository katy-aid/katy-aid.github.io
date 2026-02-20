/*** MEDICAL ***/

// Database for all medical resources
const database = {
    category: 'medical',
    data: [
        {
            title: 'Chronic and Degenerative Disease Support',
            resources: [
                {
                    name: 'Resilience Center of Houston',
                    url: 'https://www.resiliencecenterhouston.com/',
                    description: 'Provides therapy treatment for those dealing with life altering chronic illnesses'
                },
                {
                    name: 'Medical Office of Katy, Internal Medicine Practice',
                    url: 'https://medicalofficeofkaty.com/',
                    description: 'Medical office run by Internist Dr. Humera internal who specializing in primary care medicine and preventive and chronic health care'
                },
                {
                    name: 'Hulu Health',
                    url: 'https://www.hulu-health.com/',
                    description: 'Medical clinic that provides primary care, physical therapy, and acupuncture to all ages'
                },
                {
                    name: 'UT Physicians Multispecialty',
                    url: 'https://www.utphysicians.com/clinic/ut-physicians-multispecialty-cinco-ranch/',
                    description: 'Multispecialty clinic that offers primary and specialty care for children, adolescents, and adults'
                },
                {
                    name: 'CLS Health Pain Management Associates',
                    url: 'https://cls.health/locations/pain-management-cinco-ranch',
                    description: 'Pain management specialists for chronic pain support'
                },
                {
                    name: 'FYZICAL Therapy and Balance Center',
                    url: 'https://www.fyzical.com/cinco-ranch-east/',
                    description: 'Physical therapy and rehabilitation clinic that provides individualized treatment focused on restoring movement and improving balance'
                },
                {
                    name: "Cinco Ranch Alzheimer's Special Care Center",
                    url: 'https://sinceriseniorliving.com/cinco-ranch/',
                    description: "Retirement community dedicated to providing memory care in a secure, supportive environment designed for individuals living with Alzheimer's and dementia"
                },
                {
                    name: 'Airrosti',
                    url: 'https://www.airrosti.com/location/texas/katy-24022-cinco-village-center-blvd-cinco',
                    description: 'A healthcare group that employs and trains providers specialized in delivering high quality, outcome-based musculoskeletal care and pain management'
                },
                {
                    name: 'Encompass Health Rehabilitation Hospital',
                    url: 'https://www.encompasshealth.com/locations/katy-rehab?utm_source=google&utm_medium=organic&utm_campaign=gbp',
                    description: 'Specialized healthcare facility focused on inpatient rehabilitation care after strokes, traumatic injuries and other neurological conditions'
                }
            ]
        },
        {
            title: 'Addiction Recovery and Support',
            resources: [
                {
                    name: 're:MIND',
                    url: 'https://www.remindsupport.org/list-of-houston-support-groups/',
                    description: 'Provides an outlet for those struggling with the same problems, allowing them to create a community centered around coping and dealing with symptoms'
                },
                {
                    name: 'Houston Recovery Center',
                    url: 'https://houstonrecoverycenter.org/peer-support-programs-alcohol-drug-abuse/',
                    description: 'Aids those struggling with addiction, providing medical care, therapy, and resources for recovery'
                },
                {
                    name: 'Positive Recovery Center',
                    url: 'https://positiverecovery.com/locations/cinco-ranch/',
                    description: 'Addiction treatment center, providing outpatient care, group counseling, family support, and aftercare program'
                },
                {
                    name: 'New Dimensions Day Treatment Center',
                    url: 'https://nddtreatment.com/',
                    description: 'Offers structured day treatment and support services for recovery'
                },
                {
                    name: 'Norris Recovery',
                    url: 'https://www.norrisrecovery.com/locations/katy-texas',
                    description: 'Local site focused on detox and initial recovery support'
                },
                {
                    name: 'The Recovery Therapist',
                    url: 'http://joanneketch.com/',
                    description: 'Addiction support program run by a specialist in private and custom substance abuse psychotherapy services'
                },
                {
                    name: 'Alcoholics Anonymous',
                    url: 'https://addictiontreatmentmagazine.com/alcoholics-anonymous/tx/katy/',
                    description: 'Global, peer-led mutual-aid fellowship focused on abstinence-based recovery from alcoholism through it spiritually inclined Twelve Steps that hosts many meetings in Katy'
                }
            ]
        }
    ]
};

// Populate page with all medical resources
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