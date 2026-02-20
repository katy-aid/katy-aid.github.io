// Stores formatting for date and time
const options = {
    timeZone: 'America/Chicago', // Local Katy time
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short' // Displays time zone abbreviation
};
document.querySelector('header').innerHTML = `
    <small id="date-time"><img class="inline line-start" alt="Local date and time" title="Local date and time" src="assets/img/clock.png"> ${new Intl.DateTimeFormat('en-US', options).format(new Date())}</small>
    <a href="index.html" id="map-nav"><img src="assets/img/map.png" alt="Back to map" title="Back to map"></a>
`;
const updateTime = () => {
    document.getElementById('date-time').innerHTML = `<img class="inline line-start" alt="Local date and time" title="Local date and time" src="assets/img/clock.png"> ${new Intl.DateTimeFormat('en-US', options).format(new Date())}`;
};
setInterval(updateTime, 1000); // Measures in milliseconds (1 sec = 1000 ms)