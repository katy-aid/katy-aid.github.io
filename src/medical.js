/*** MEDICAL ***/

// Database for medical resources
const resources = [
    {
        name: '',
        url: '',
        description: ''
    },
    {
        name: '',
        url: '',
        description: ''
    },
    {
        name: '',
        url: '',
        description: ''
    },
    {
        name: '',
        url: '',
        description: ''
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