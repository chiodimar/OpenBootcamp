let nombre = "Mariano"
let apellido = "Chiodi"
let persona = {
    nombre: "Mariano",
    apellido: "Chiodi",
}

// Guardo el objeto en SessionStortage y en LocalStorage
sessionStorage.setItem("personaSession", JSON.stringify(persona));
localStorage.setItem("personaLocal", JSON.stringify(persona));

/*COOKIES*/

document.cookie = "nombreCookie=MarianoCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date (2023,0,1).toUTCString()