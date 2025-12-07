/*** REFERENCES ***/

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
// for (let i = 0; i < resources.length; i++) {
//     document.querySelector(`section.education`).innerHTML = `
//     `;
// }

// White with 50% opacity
const overlay = 'rgba(255, 255, 255, 0.75)';

// background: imageURL repeat verticalPosition horizontalPosition / size
document.querySelector('div.resource').style.setProperty('background', `linear-gradient(${overlay}, ${overlay}), url("assets/img/sites/education/0.png") no-repeat top center / cover`, 'important');