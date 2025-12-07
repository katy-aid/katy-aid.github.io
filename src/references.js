/*** REFERENCES ***/

// Database for citations (make sure to include punctuation at end of each property, and exlude space at end/beginnning of each property)
const unformatted = [
    // Community resources
    [
        {
            preEm: '“Chronic Care Management in Katy, TX.”',
            em: 'Macie Medical,',
            postEm: '25 Nov. 2025, www.maciemedical.com/chronic-care-management-katy.'
        },
        {
            preEm: '“Find a Group | Houston, Texas, USA.”',
            em: 'Re:MIND,',
            postEm: 'www.remindsupport.org/list-of-houston-support-groups. Accessed 6 Dec. 2025.'
        },
        {
            preEm: '“Home.”',
            em: 'Justice for All Immigrants,',
            postEm: 'www.justiceforallimmigrants.org. Accessed 6 Dec. 2025.'
        },
        {
            preEm: '“---.”',
            em: 'CWS Houston,',
            postEm: 'cwshouston.org. Accessed 6 Dec. 2025.'
        },
        {
            preEm: '“---.”',
            em: 'U.S. Committee For Refugees And Immigrants,',
            postEm: '19 Nov. 2025, refugees.org.'
        },
        {
            preEm: '“---.”',
            em: 'Compudopt,',
            postEm: 'www.compudopt.org. Accessed 6 Dec. 2025.'
        },
        {
            preEm: '“---.”',
            em: 'Fort Bend County Libraries,',
            postEm: 'www.fortbendlibraries.gov. Accessed 6 Dec. 2025.'
        },
        {
            preEm: '“Homework Buddies.”',
            em: 'Katy Christian Ministries,',
            postEm: '26 Jan. 2024, ktcm.org/event/homework-buddies.'
        },
        {
            preEm: '“Houston Counseling - Mental Health and Cognitive Behavioral Therapy.”',
            em: 'The Resilience Center of Houston,',
            postEm: 'www.resiliencecenterhouston.com. Accessed 6 Dec. 2025.'
        },
        {
            preEm: '“Immigrants’ Rights Hotline.”',
            em: 'ACLU of Texas,',
            postEm: '13 May 2019, www.aclutx.org/en/campaigns/hotline.'
        },
        {
            preEm: '“Peer Support Programs for Alcohol and Drug Abuse Recovery in Houston TX.”',
            em: 'Houston Recovery Center,',
            postEm: '11 June 2020, houstonrecoverycenter.org/peer-support-programs-alcohol-drug-abuse.'
        },
        {
            preEm: '“St. Frances Cabrini Center for Legal Assistance.”',
            em: 'Catholic Charities of the Archdiocese of Galveston-Houston,',
            postEm: '20 Oct. 2025, catholiccharities.org/cabrini.'
        },
        {
            preEm: '“YMCA International Services - Locations.”',
            em: 'Houston YMCA,',
            postEm: '14 Nov. 2025, ymcahouston.org/locations/ymca-international-services.'
        }
    ],

    // Image sources
    [
        {
            preEm: '',
            em: '',
            postEm: ''
        },
        {
            preEm: '',
            em: '',
            postEm: ''
        },
        {
            preEm: '',
            em: '',
            postEm: ''
        },
        {
            preEm: '',
            em: '',
            postEm: ''
        },
        {
            preEm: '',
            em: '',
            postEm: ''
        },
        {
            preEm: '',
            em: '',
            postEm: ''
        }
    ],

    // Code references
    [
        {
            preEm: '',
            em: '',
            postEm: ''
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