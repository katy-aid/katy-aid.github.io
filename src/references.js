/*** REFERENCES ***/

// Database for citations
const unformatted = [
    [
        {
            preEm: '“Home | Fort Bend County Libraries.”',
            em: 'Fort Bend County Libraries,',
            postEm: 'www.fortbendlibraries.gov.'
        },
        {
            preEm: 'Katy Christian Ministries. “Homework Buddies.”',
            em: 'Katy Christian Ministries,',
            postEm: '26 Jan. 2024, ktcm.org/event/homework-buddies.'
        }
    ]
];

// Store formatted citations
let formatted = [];

// Format each works cited entry into MLA 9th edition citation format
for (let topicNum = 0; topicNum < unformatted.length; topicNum++) {
    let topic = unformatted[topicNum];
    for (let entryNum = 0; entryNum < topic.length; entryNum++) {
        let entry = topic[entryNum];
        formatted.push(`<p>${entry.preEm} <em>${entry.em}</em> ${entry.postEm}</p><br>`);
    };
};

// Populate formatted references in current topic section
for (let topicNum = 0; topicNum < formatted.length; topicNum++) {
    document.querySelector(`#references${topicNum}`).innerHTML = `${formatted[topicNum]}`;
}