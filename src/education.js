/*** EDUCATION ***/

// Database for education resources
const resources = [
    {
        name: 'Fort Bend Public Libraries',
        url: 'https://www.fortbendlibraries.gov/',
        description: 'Offers free books, TV, movies, and computer access'
    },
    {
        name: 'Compudopt',
        url: 'https://www.compudopt.org/',
        description: 'Offers free computers and technology to qualifying students'
    },
    {
        name: 'KCM Homework Buddies',
        url: 'https://ktcm.org/event/homework-buddies/',
        description: 'Offers free tutoring for grades K-12 in the Katy area'
    }
];

// Populate page with education resources
for (let i = 0; i < resources.length; i++) {
    let r = resources[i];
    document.querySelector(`section.education`).innerHTML += `
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
    document.querySelector(`#site-img${i}`).style.setProperty('background', `url("assets/img/sites/education/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}