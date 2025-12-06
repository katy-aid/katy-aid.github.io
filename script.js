/*** MAP ***/

// Grassy bkgd
var  bounds = [[0,0], [1000,1000]];
const map = L.map('map', {
    crs: L.CRS.Simple, // REMINDER: CRS.Simple coordinates are in [y,x] format (L.latLng is opposite order from typical coordinates)
    minZoom: 0,
    maxZoom: 2,
    maxBounds: bounds, // Prevents user from navigating outside grass
    maxBoundsViscosity: 1.0 // Re-enforces maxBounds
});
map.fitBounds(bounds);

// Information for each building marker
const buildings = {
    immigration: {
        location: [750, 500],
        icon: L.icon({
            iconUrl: 'assets/img/icons/immigration.png',
            iconAnchor: [75, 75],
            popupAnchor: [0, -75]
        }),
        title: 'Immigration',
        hook: 'Coming to Katy from another country?',
        description: 'Find resources to help you settle into the community',
        marker: null
    },
    education: {
        location: [500, 250],
        icon: L.icon({
            iconUrl: 'assets/img/icons/education.png',
            iconAnchor: [75, 75],
            popupAnchor: [0, -75]
        }),
        title: 'Education',
        hook: 'Are you a student?',
        description: 'Find resources for helping you with school',
        marker: null    
    },
    info: {
        location: [500, 500],
        icon: L.icon({
            iconUrl: 'assets/img/icons/info.png',
            iconAnchor: [75, 75],
            popupAnchor: [0, -75]
        }),
        title: 'Katy Aid',
        hook: 'Welcome to Katy!',
        description: 'Learn more about the resources in our community by moving around the map',
        marker: null
    },
    medical: {
        location: [500, 750],
        icon: L.icon({
            iconUrl: 'assets/img/icons/medical.png',
            iconAnchor: [75, 75],
            popupAnchor: [0, -75]
        }),
        title: 'Medical',
        hook: 'Looking for medical assistance?',
        description: 'Find resources for chronic disease support and addiction recovery',
        marker: null
    }
};

Object.keys(buildings).forEach(bName => {
    if (b.name != "info") {
        const b = buildings[bName];
        b.marker = L.marker(b.location, {icon: b.icon}).addTo(map);
        b.marker.bindPopup(`
            <div class="popup">
                <h3>${b.title}</h3>
                <i>${b.hook}</i>
                <p class="center">${b.description}</p>
                <a href="${bName}.html"><button>Enter</button></a>
            </div>
        `);
    }
    else {
        const b = buildings["info"];
        b.marker = L.marker(b.location, {icon: b.icon}).addTo(map);
        b.marker.bindPopup(`
            <div class="popup">
                <h3>${b.title}</h3>
                <i>${b.hook}</i>
                <p class="center">${b.description}</p>
            </div>
        `);
    }
});

buildings.townHall.marker.on('click', function(e) {
    buildings.townHall.marker.openPopup();
});
map.setView([575, 500], 1);
buildings.townHall.marker.fire('click');