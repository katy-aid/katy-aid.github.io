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

// Information for each map marker
const markers = {
    businesses: {
        location: [700, 300],
        icon: L.icon({
            iconUrl: 'assets/img/businesses.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Small Businesses',
        hook: 'Like local vendors?',
        description: 'Find local small businesses and learn how to start your own',
        market: null
    },
    cultural: {
        location: [700, 500],
        icon: L.icon({
            iconUrl: 'assets/img/cultural.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Cultural',
        hook: 'Looking for culture?',
        description: 'Explore ethnic markets, worship places, and more',
        marker: null
    },
    education: {
        location: [700, 700],
        icon: L.icon({
            iconUrl: 'assets/img/education.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Education',
        hook: 'Want to learn?',
        description: 'Find educational resources for both students and adults',
        marker: null
    },
    immigration: {
        location: [500, 300],
        icon: L.icon({
            iconUrl: 'assets/img/immigration.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Immigration',
        hook: 'Immigrated to the US?',
        description: 'Find resources to help you settle into the community',
        marker: null
    },
    info: {
        location: [500, 500],
        icon: L.icon({
            iconUrl: 'assets/img/info.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -50]
        }),
        title: 'Katy Aid',
        hook: 'Welcome to Katy!',
        description: 'Learn more about the resources in Katy by moving around the map',
        marker: null
    },
    medical: {
        location: [500, 700],
        icon: L.icon({
            iconUrl: 'assets/img/medical.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Medical',
        hook: 'Looking for medical assistance?',
        description: 'Find resources for chronic disease support and addiction recovery',
        marker: null
    },
    recreational: {
        location: [300, 300],
        icon: L.icon({
            iconUrl: 'assets/img/recreational.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Recreational',
        hook: 'Looking for some fun?',
        description: 'Explore some of the parks and shopping centers to visit'
    },
    residences: {
        location: [300, 500],
        icon: L.icon({
            iconUrl: 'assets/img/residences.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Residences',
        hook: 'Looking for a place to live?',
        description: 'Check out some of the apartment complexes and neighborhoods in the area'
    },
    volunteer: {
        location: [300, 700],
        icon: L.icon({
            iconUrl: 'assets/img/volunteer.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Volunteer',
        hook: 'Want to help others?',
        description: 'Explore a variety of places where you can volunteer'
    }
};

Object.keys(markers).forEach(mName => {
    const m = markers[mName];
    m.marker = L.marker(m.location, {icon: m.icon}).addTo(map);
    if (mName != "info") {
        m.marker.bindPopup(`
            <div class="popup">
                <h3>${m.title}</h3>
                <i>${m.hook}</i>
                <p class="center">${m.description}</p>
                <a href="${mName}.html"><button>View Resources</button></a>
            </div>
        `);
    }
    else {
        m.marker.bindPopup(`
            <div class="popup">
                <h3>${m.title}</h3>
                <i>${m.hook}</i>
                <p class="center">${m.description}</p>
            </div>
        `); // <a href="references.html"><button>View References</button></a>
    }
});

markers.info.marker.on('click', function(e) {
    markers.info.marker.openPopup();
});
map.setView([575, 500], 0.5);
markers.info.marker.fire('click');