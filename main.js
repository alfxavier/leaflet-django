window.onload = init;

function init() {

    const mapElement = document.getElementById('mapid')

    const sateliteMaps = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })

    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    const mymap = L.map(mapElement, {
        center: [-15.839443634001434, -48.02992505486712],
        zoom: 19,
        minZoom: 4,
        layers: [sateliteMaps]
    })

    const baseLayers = {
        '<b>Tiles Esri</b>' : sateliteMaps,
        'Open Street Map' : openStreetMap
    }
    const layerControls = L.control.layers(baseLayers, {}, {
        collapsed: false
    }).addTo(mymap)

}