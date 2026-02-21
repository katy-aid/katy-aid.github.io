
document.querySelector('header').innerHTML = `
    <a href="index.html" id="map-nav"><img src="assets/img/map.png" alt="Back to home page" title="Back to home page"></a>
    <small id="date-time"><img class="inline line-start" alt="Katy date and time" title="Katy date and time" src="assets/img/clock.png"> ${(new Date()).toLocaleString('en-US', { timeZone: 'America/Chicago'})}</small>
`;
const updateTime = () => {
    document.getElementById('date-time').innerHTML = `<img class="inline line-start" alt="Katy date and time" title="Katy date and time" src="assets/img/clock.png"> ${(new Date()).toLocaleString('en-US', { timeZone: 'America/Chicago'})}`;
};
setInterval(updateTime, 1000); // Measures in milliseconds (1 sec = 1000 ms)

/*
TO-DO LIST
- Potentially create responsive nav bar with all links
    - Main umbrella categories expand to show individual categories
*/