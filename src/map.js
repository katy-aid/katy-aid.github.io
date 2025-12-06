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
    immigration: {
        location: [750, 500],
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
    education: {
        location: [500, 250],
        icon: L.icon({
            iconUrl: 'assets/img/education.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Education',
        hook: 'Are you a student?',
        description: 'Find resources for helping you with your schoolwork',
        marker: null    
    },
    info: {
        location: [500, 500],
        icon: L.icon({
            iconUrl: 'assets/img/info.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Katy Aid',
        hook: 'Welcome to Katy!',
        description: 'Learn more about the resources in Katy by moving around the map',
        marker: null
    },
    medical: {
        location: [500, 750],
        icon: L.icon({
            iconUrl: 'assets/img/medical.png',
            iconAnchor: [100, 100],
            popupAnchor: [0, -100]
        }),
        title: 'Medical',
        hook: 'Looking for medical assistance?',
        description: 'Find resources for chronic disease support and addiction recovery',
        marker: null
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
                <a href="references.html"><button>View References</button></a>
            </div>
        `);
    }
});

markers.info.marker.on('click', function(e) {
    markers.info.marker.openPopup();
});
map.setView([575, 500], 1);
markers.info.marker.fire('click');