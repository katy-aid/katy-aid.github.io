/*** MEDICAL ***/

// Database for medical resources
const resources = [
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
        name: 're:MIND',
        url: 'https://www.remindsupport.org/list-of-houston-support-groups/',
        description: 'Provides an outlet for those struggling with the same problems, allowing them to create a community centered around coping and dealing with symptoms'
    },
    {
        name: 'Houston Recovery Center',
        url: 'https://houstonrecoverycenter.org/peer-support-programs-alcohol-drug-abuse/',
        description: 'Aids those struggling with addiction, providing medical care, therapy, and resources for recovery'
    },
];

// Populate page with medical resources
for (let i = 0; i < resources.length; i++) {
    let r = resources[i];
    document.querySelector(`section.medical`).innerHTML += `
        <div class="resource">
            <a href="${r.url}" target="_blank">
                <div class="card">
                    <div id="text${i}" class="text">
                        <h3>${r.name}</h4>
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