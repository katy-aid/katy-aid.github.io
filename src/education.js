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
const esl = [
    {
        name: '123AmericanEnglish',
        url: '',
        description: 'Private language academy that specializes in teaching English as a second language to speakers of other languages by offering flexible course options'
    },
    {
        name: 'Crossing Borders Language Center',
        url: '',
        description: 'Private language school that provides personalized language instruction for adults, teens, and children'
    },
    {
        name: 'Katy ISD Parent ESL Classes',
        url: '',
        description: 'Provides free adult English classes along with mentoring and workshops'
    },
    {
        name: 'Fort Bend Library',
        url: '',
        description: 'Periodically hosts ESL conversation circles, informal free English practice events where learners can improve their speaking skills'
    },
    {
        name: 'Trinity Baptist Church',
        url: '',
        description: 'Offers free ESL classes for adults, beginner through advanced'
    },
    {
        name: 'Christ Church',
        url: '',
        description: 'Offers ESL classes with multiple proficiency levels'
    },
    {
        name: 'St. Bartholomew Catholic Church',
        url: '',
        description: 'Offers morning and evening ESL classes'
    }
];
const adult = [
    {
        name: 'Katy ISD Community Education',
        url: '',
        description: 'Offers non-credit adult education courses virtually in topics like computer, language, wellness, arts, and career skills'
    },
    {
        name: 'Lone Star College-Cypress Center',
        url: '',
        description: 'Community college that offers a wide range of adult education and workforce training programs'
    }
]

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

// Populate page with ESL help
document.querySelector(`section.education`).innerHTML += `<h2 class="subcategory">English as a Second Language (ESL)</h2>`;
for (let i = 0; i < esl.length; i++) {
    let r = esl[i];
    document.querySelector(`section.education`).innerHTML += `
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
    document.querySelector(`#site-img${i}`).style.setProperty('background', `url("assets/img/sites/education/${i}.png") no-repeat top center / cover`, 'important'); // background: imageURL repeat verticalPosition horizontalPosition / size

    // Access div containing current name and description
    let text = document.querySelector(`#text${i}`);

    // Adjust height of resource site image based on overall size of name and description
    document.querySelector(`#site-img${i}`).style.setProperty('height', `calc(100% - 20px - ${window.getComputedStyle(text).height})`);
}