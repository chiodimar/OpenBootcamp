let marker; map;

function initMap() {
    //Definimos una poscion arbitraria
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    const lugar1 = {
        lat: 45.363,
        lng: 34.044
    }

    const lugar2 = {
        lat: 7.363,
        lng: 12.044
    }

    // Definimos el mapa

    map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center: posicion,
    })// dos parametro, donde lo vamos a utilizar y como segundo parametro, nos pide un objeto con dos atributos

    // Que nos aparezca una chincheta
    // se hace con el .Marker que tiene varios atributos 1 - la poscion 2 - el mapa donde tiene que estar
    marker = new google.maps.Marker({
        position: posicion,
        map: map,
        titulo: "Posicion Inicial"
    })

    // Obtener la geolocalizacion
    // hacer un marker.setPosition ({lat,lng})
    geoPosiciona()
    chinchetaLugar(lugar1) 
    chinchetaLugar(lugar2)
}

function geoPosiciona(){
    if(navigator.geolocation){ // por si el navegador no puede obtener la ubicacion
        const geoLoc = navigator.geolocation // en geoLoc empezamos a obtener la ubicacion
        const options = {timeout:5000 }
        const watchPos = geoLoc.watchPosition(centraMapa,onError, options) // me da las coordenadas de donde estoy
    } else {
        alert("Tu navegador no soporta")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }
    console.log(nuevaPos);
    marker.setPosition (nuevaPos);
    map.setCenter(nuevaPos);
}

function onError(error) {
    console.error(error);
}

function chinchetaLugar(lugar) {
    marker.setPosition (lugar)
}
