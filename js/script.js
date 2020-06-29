function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {lat: 7.1351824, lng: -73.11},
        mapTypeId: 'terrain'
    });


    workArea.setMap(map);
}