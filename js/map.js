/**
 * Created by 1 on 01.10.2016.
 */
var map;
// var watchId = null;
// var kostyl = 0;
var ourCoords = {
    /*latitude: 47.624851,
    longitude: -122.52099*/
    latitude: 50.363969,
    longitude: 30.927744
};

window.onload = getMyLocation;
// var options = {enableHighAccuracy: true, timeout: 100, maximumAge: 0};

/*function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}*/

/*function clearWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}*/

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError); /*displayError, options*/
        /*var watchButton = document.getElementById("watch");
         watchButton.onclick = watchLocation;
         var clearWatchButton = document.getElementById("clearWatch");
         clearWatchButton.onclick = clearWatch;*/
    }

    else {
        alert("Oops, no geolocation support");
    }
}

var prevCoords = null;
function displayLocation(position) {
    // var latitude = ourCoords.latitude; /*position.coords.latitude*/
    // var longitude = ourCoords.longitude; /*position.coords.longitude*/
   /* var div = document.getElementById("location");

    div.innerHTML = "You are at latitude: " + latitude + ", Longitude: " + longitude;
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";*/

    /*var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
    div.innerHTML += " (found in " + options.timeout + " milliseconds)";*/
    /*if (km < .1) {
     distance.innerHTML = "You are on fire!";
     }
     else {
     if(km < 9000) {
     distance.innerHTML = "You are getting hotter!";
     }
     else {
     distance.innerHTML = "You are getting colder...";
     }
     }*/
    // prevKm = km;
    // if (map == null) {
        showMap(ourCoords); /*position.coords*/
        prevCoords = ourCoords; /*position.coords*/
    // }
    // else {
    //     var meters = computeDistance(position.coords, prevCoords) * 1000;
    //     if(meters > 20) {
    //         scrollMapPosition(position.coords);
    //         prevCoords = position.coords;
    //     }
    // }
}

function displayError(error) {
    var errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };

    // var errorMessage = errorTypes[error.code];
    // if (error.code == 0 || error.code == 2) {
        // errorMessage = errorMessage + " " + error.message;
    // }

    // var div = document.getElementById("location");
    // div.innerHTML = errorMessage;
    // options.timeout += 100;
    // navigator.geolocation.getCurrentPosition(
    //     displayLocation,
    //     displayError,
    //     options);
    // div.innerHTML += "... checking again with timeout=" + options.timeout;
}

/*function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371;
    return Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) * Math.cos(destLatRads) *
            Math.cos(startLongRads - destLongRads)) * Radius;

}*/

/*
function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
*/

function showMap(coords) {
    // kostyl = 1;
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

    var mapOptions = {
        zoom: 16,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

    var title = "Мы находимся здесь";
    // var content = "You are here " + coords.latitude + ", " + coords.longitude;
    var content = "ул. Киевский шлях, 1/27 кв.3";
    addMarker(map, googleLatAndLong, title, content);
}

function addMarker(map, latlong, title, content) {
    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };

    var marker = new google.maps.Marker(markerOptions);

    var infoWindowOptions = {
        content: content,
        position: latlong
    };

    var infoWindows = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function () {
        infoWindows.open(map);
    })
}
/*

function scrollMapPosition(coords) {
    var latitude = coords.latitude;
    var longitude = coords.longitude;
    var latlong = new google.maps.LatLng(latitude, longitude);

    map.panTo(latlong);

    addMarker(map, latlong, "Your new location", "You moved to: " +
        latitude + ", " + longitude);
}*/
