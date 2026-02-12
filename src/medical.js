/*** MEDICAL ***/

// Database for medical resources
const diseases = [
    {
        name: 'Macie Center',
        url: 'https://www.maciemedical.com/chronic-care-management-katy/',
        description: 'Aids in chronic illness management and treatment'
    },
    {
        name: 'Resilience Center of Houston',
        url: 'https://www.resiliencecenterhouston.com/',
        description: 'Provides therapy treatment for those dealing with life altering chronic illnesses'
    },
    {
        name: 'Medical Office of Katy, Internal Medicine Practice',
        url: '',
        description: 'Medical office run by Internist Dr. Humera internal who specializing in primary care medicine and preventive and chronic health care'
    },
    {
        name: 'Hulu Health',
        url: '',
        description: 'Medical clinic that provides primary care, physical therapy, and acupuncture to all ages'
    },
    {
        name: 'UT Physicians Multispecialty',
        url: '',
        description: 'Multispecialty clinic that offers primary and specialty care for children, adolescents, and adults'
    },
    {
        name: 'CLS Health Pain Management Associates',
        url: '',
        description: 'Pain management specialists for chronic pain support'
    },
    {
        name: 'FYZICAL Therapy and Balance Center',
        url: '',
        description: 'Physical therapy and rehabilitation clinic that provides individualized treatment focused on restoring movement and improving balance'
    },
    {
        name: "Cinco Ranch Alzheimer's Special Care Center",
        url: '',
        description: "Retirement community dedicated to providing memory care in a secure, supportive environment designed for individuals living with Alzheimer's and dementia"
    },
    {
        name: 'Airrosti',
        url: '',
        description: 'A healthcare group that employs and trains providers specialized in delivering high quality, outcome-based musculoskeletal care and pain  management'
    },
    {
        name: 'Encompass Health Rehabilitation Hospital',
        url: '',
        description: 'Specialized healthcare facility focused on inpatient rehabilitation care after strokes, traumatic injuries and other neurological conditions'
    }
];
const addiction = [
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
        name: 'Positive Recovery Centers - Katy',
        url: '',
        description: 'Addiction treatment center, providing outpatient care, group counseling, family support, and aftercare program'
    },
    {
        name: 'New Dimensions Day Treatment Center',
        url: '',
        description: 'Offers structured day treatment and support services for recovery'
    },
    {
        name: 'Positive Recovery Center',
        url: '',
        description: 'Addiction treatment center that offers a wide variety of outpatient care'
    },
    {
        name: 'Drug Detox',
        url: '',
        description: 'Local site focused on detox and initial recovery support'
    },
    {
        name: 'The Recovery Therapist',
        url: '',
        description: 'Addiction support program run by a specialist in private and custom substance abuse psychotherapy services'
    },
    {
        name: 'Alcoholics Anonymous',
        url: '',
        description: 'Global, peer-led mutual-aid fellowship focused on abstinence-based recovery from alcoholism through it spiritually inclined Twelve Steps that hosts many meetings in Katy'
    }
];

// Populate page with chronic and degenerative disease support
document.querySelector(`section.medical`).innerHTML += `<h2 class="subcategory">Chronic and Degenerative Disease Support</h2>`;
for (let i = 0; i < diseases.length; i++) {
    let r = diseases[i];
    document.querySelector(`section.medical`).innerHTML += `
        <div class="resource">
            <a href="${r.url}" target="_blank">
                <div class="card">
                    <div id="text${i}" class="text">
                        <h3>${r.name}</h3>
                        <p>${r.description}</p>
                    </div>
                    <div id="site-img${i}" class="site-img"></div>
                </div>
            </a>
        </div>
    `;

    // Add image of resource site below its name and description
    document.querySelector(`#site-img${i}`).style.setProperty('background', `url("assets/img/sites/medical/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}

// Populate page with addiction recovery and support resources
document.querySelector(`section.medical`).innerHTML += `<h2 class="subcategory">Addiction Recovery and Support</h2>`;
for (let i = 0; i < addiction.length; i++) {
    let r = addiction[i];
    document.querySelector(`section.medical`).innerHTML += `
        <div class="resource">
            <a href="${r.url}" target="_blank">
                <div class="card">
                    <div id="text${i + chronic.length}" class="text">
                        <h3>${r.name}</h3>
                        <p>${r.description}</p>
                    </div>
                    <div id="site-img${i + chronic.length}" class="site-img"></div>
                </div>
            </a>
        </div>
    `;

    // Add image of resource site below its name and description
    document.querySelector(`#site-img${i + chronic.length}`).style.setProperty('background', `url("assets/img/sites/medical/${i + chronic.length}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i + chronic.length}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i + chronic.length}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}