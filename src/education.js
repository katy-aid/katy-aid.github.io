/*** EDUCATION ***/

// Database for all education resources
const database = {
    category: 'education',
    data: [
        {
            title: 'Tutoring Help',
            resources: [
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
                    url: 'http://tutoringcenter.com/center/katytx',
                    description: 'Personalized tutoring and study skill support for students of all ages'
                },
                {
                    name: 'Solutions Education',
                    url: 'https://www.sol-edu.com/',
                    description: 'Private tutoring and test preparation center that provides personalized academic support for students in elementary to high school'
                },
                {
                    name: 'Benedictine Tutors',
                    url: 'https://benedictinetutors.com/',
                    description: 'Tutoring and test preparation center, serving students grades K-12'
                },
                {
                    name: 'Best in Class Education Center',
                    url: 'http://bestinclasseducation.com/',
                    description: 'Supplemental learning center that provides personalized academic enrichment tutoring for kids in all grade levels'
                },
                {
                    name: 'Mathnasium',
                    url: 'https://www.mathnasium.com/math-centers/cincoranch',
                    description: 'Math-focused learning center, offering individualized tutoring for students from preschool through college'
                },
                {
                    name: 'Kumon Math and Reading Center',
                    url: 'https://www.kumon.com/katy-cinco-ranch-southwest/?utm_source=local&utm_medium=gmb&utm_campaign=Katy%20Cinco%20Ranch%20Southwest',
                    description: 'Provides after-school tutoring in math and reading for children from preschool through high school'
                },
                {
                    name: 'C2 Education',
                    url: 'https://www.c2educate.com/locations/grand-parkway-katy-tx/?utm_source=google&utm_medium=local&utm_campaign=localmaps',
                    description: 'Tutoring and college preparation center specializing in personalized academic tutoring, standardized testing preparation, and college admission counseling for students in grades K-12'
                },
                {
                    name: 'Tutoring Club of Katy',
                    url: 'https://tutoringclub.com/katytx/',
                    description: 'Supplemental education center providing individualized tutoring for students preschool through 12th grade'
                },
                {
                    name: 'Katy Test Prep and More',
                    url: 'http://katytestprep.com/',
                    description: 'Education center focused on standardized test preparation and academic tutoring'
                },
                {
                    name: 'Huntington Learning Center',
                    url: 'https://huntingtonhelps.com/locations/katy-tx?utm_medium=organic&utm_campaign=localmaps',
                    description: 'Learning center that offers tutoring and test preparation services'
                }
            ]
        },
        {
            title: 'English as a Second Language',
            resources: [
                {
                    name: 'Crossing Borders Language Center',
                    url: 'https://cblckaty.com/',
                    description: 'Private language school that provides personalized language instruction for adults, teens, and children'
                },
                {
                    name: 'Fort Bend Library',
                    url: 'https://www.fortbendlibraries.gov/locations-hours/cinco-ranch',
                    description: 'Periodically hosts ESL conversation circles, informal free English practice events where learners can improve their speaking skills'
                },
                {
                    name: 'Trinity Baptist Church',
                    url: 'https://trinity-katy.org/esl-english-classes/',
                    description: 'Offers free ESL classes for adults, beginner through advanced'
                },
                {
                    name: 'Christ Church',
                    url: 'https://www.cckpca.org/esl',
                    description: 'Offers ESL classes with multiple proficiency levels'
                },
                {
                    name: 'St. Bartholomew Catholic Church',
                    url: 'https://st-bart.org/esl',
                    description: 'Offers morning and evening ESL classes'
                }
            ]
        },
        {
            title: 'Adult Education',
            resources: [
                {
                    name: 'Katy ISD Community Education',
                    url: 'https://www.katyisd.org/community/community-education/home',
                    description: 'Offers non-credit adult education courses virtually in topics like computer, language, wellness, arts, and career skills'
                },
                {
                    name: 'Lone Star College-Cypress Center',
                    url: 'http://www.lonestar.edu/cypresscenter.htm',
                    description: 'Community college that offers a wide range of adult education and workforce training programs'
                }
            ]
        }
    ]
};

// Populate page with all medical resources
let cat = database.category;
for (let s = 0; s < database.data.length; s++) { // Iterates through each subcategory object within database
    let subcat = database.data[s];
    document.querySelector(`section.${cat}`).innerHTML += `<h2 class="subcategory">${subcat.title}</h2>`;
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