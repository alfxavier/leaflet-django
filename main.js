window.onload = init;

function init() {

    const mymap = L.map('mapid', {
        center: [-15.839443634001434, -48.02992505486712],
        zoom: 30,
        layers: [
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            })
        ]
    })

}