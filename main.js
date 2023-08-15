window.onload = init;

function init() {
    //Elemento HTML
    const mapElement = document.getElementById('mapid')


    //BaseMaps
    const sateliteMaps = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })

    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })


    // Leaflet map object
    const mymap = L.map(mapElement, {
        center: [-15.839443634001434, -48.02992505486712],
        zoom: 19,
        minZoom: 4,
        layers: [sateliteMaps]
    })

    // Basemap Object
    const baseLayers = {
        '<b>Tiles Esri</b>' : sateliteMaps,
        'Open Street Map' : openStreetMap
    }

    // Overlays
    const uniplanr22BaseMapImage = './data/uniplan_rua22.png';
    const uniplanr22BaseMapBounds = [[-15.839789426551249, -48.027527332305915],[-15.83696649081145, -48.0251830816269]]
    const imageuniplanr22Overlay = L.imageOverlay(uniplanr22BaseMapImage, uniplanr22BaseMapBounds)

    const OverlayerLayers = {
      'Rua 22 N x Uniplan': imageuniplanr22Overlay  
    }    

    mymap.on('click', function(event){
        console.log(event.latlng)
    })

    // Layer Control
    const layerControl = L.control.layers(baseLayers, OverlayerLayers, {
        collapsed: false
    }).addTo(mymap)

}