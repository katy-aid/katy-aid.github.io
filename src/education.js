/*** EDUCATION ***/

// Database for education resources
const tutoring = [
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
    },
    {
        name: 'The Tutoring Center',
        url: '',
        description: 'Personalized tutoring and study skill support for students of all ages'
    },
    {
        name: 'Solutions Education',
        url: '',
        description: 'Private tutoring and test preparation center that provides personalized academic support for students in elementary to high school'
    },
    {
        name: "Counter's Tutoring Connection",
        url: '',
        description: 'Private tutoring center focused on personalized education for students preschool through college'
    },
    {
        name: 'Katy Scholars',
        url: '',
        description: 'Educational services business, specializing in tutoring, test preparation, and academic support'
    },
    {
        name: 'Benedictine Tutors',
        url: '',
        description: 'Tutoring and test preparation center, serving students grades K-12'
    },
    {
        name: 'Best in Class Education Center',
        url: '',
        description: 'Supplemental learning center that provides personalized academic enrichment tutoring for kids in all grade levels'
    },
    {
        name: 'Mathnasium',
        url: '',
        description: 'Math-focused learning center, offering individualized tutoring for students from preschool through college'
    },
    {
        name: 'Kumon Math and Reading Center',
        url: '',
        description: 'Provides after-school tutoring in math and reading for children from preschool through high school'
    },
    {
        name: 'C2 Education',
        url: '',
        description: 'Tutoring and college preparation center specializing in personalized academic tutoring, standardized testing preparation, and college admission counseling for students in grades K-12'
    },
    {
        name: 'Tutoring Club of Katy',
        url: '',
        description: 'Supplemental education center providing individualized tutoring for students preschool through 12th grade'
    },
    {
        name: 'Katy Test Prep and More',
        url: '',
        description: 'Education center focused on standardized test preparation and academic tutoring'
    },
    {
        name: 'Huntington Learning Center',
        url: '',
        description: 'Learning center that offers tutoring and test preparation services'
    }
];

// Populate page with tutoring help
document.querySelector(`section.education`).innerHTML += `<h2 class="subcategory">Tutoring Help</h2>`;
for (let i = 0; i < tutoring.length; i++) {
    let r = tutoring[i];
    document.querySelector(`section.education`).innerHTML += `
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
    document.querySelector(`#site-img${i}`).style.setProperty('background', `url("assets/img/sites/education/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}