/*** VOLUNTEER OPPORTUNITIES ***/

// Database for volunteer opportunities
const opportunities = [
    {
        name: 'Ballard House',
        url: '',
        description: 'Offers no-cost temporary housing for individuals and caregivers undergoing treatment'
    },
    {
        name: 'Sunrise Senior Living Center',
        url: '',
        description: 'A residential community that provides specialized care and services for elderly residents'
    },
    {
        name: 'Fort Bend Library',
        url: '',
        description: "Public library featuring a children's section, study areas, and computers while offering several volunteer opportunities"
    },
    {
        name: 'Katy Christian Ministries',
        url: '',
        description: 'Nonprofit that offers emergency financial assistance and resiliency programs'
    },
    {
        name: 'Christ Clinic',
        url: '',
        description: 'Nonprofit that offers high quality healthcare and health-related services to those who are uninsured or underinsured'
    },
    {
        name: 'Memorial Hermann Katy Hospital',
        url: '',
        description: 'Provides clinical expertise, patient-centered care, and leading-edge technology'
    },
    {
        name: "Cinco Ranch Alzheimer's Special Care Center",
        url: '',
        description: "Retirement community dedicated to providing memory care in a secure, supportive environment designed for individuals living with Alzheimer's and dementia"
    },
    {
        name: 'Legacy at Falcon Point',
        url: '',
        description: 'Assisted living and memory care community providing personalized support with daily activities such as line dancing and yoga'
    },
    {
        name: 'Keep Encouraging Youth toward Success (KEYS) Mentoring',
        url: '',
        description: 'Katy ISD program that primarily focusees on relationship building, rather than tutoring between a mentor and student'
    },
    {
        name: 'Katy Heritage Society',
        url: '',
        description: 'Nonprofit dedicated to furthering the educational and cultural development of the community by preserving, restoring, and displaying historical landmarks, natural beauty, documents'
    },
    {
        name: "Krause Children's Center",
        url: '',
        description: 'Offers a nurturing and temporary haven for hundreds of unaccommpanied children annually, providing them with solace, safety, and a pathway to healing after their journey across the Souther border'
    }
];

// Populate page with volunteer opportunities (no subcategories)
for (let i = 0; i < opportunities.length; i++) {
    let r = opportunities[i];
    document.querySelector(`section.volunteer`).innerHTML += `
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
    document.querySelector(`#site-img${i}`).style.setProperty('background', `url("assets/img/sites/volunteer/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}