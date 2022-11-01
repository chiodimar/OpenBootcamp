const botonAlert = document.getElementById("btnAlert");
botonAlert.addEventListener("click", evento => {
    evento.preventDefault();
    alert("Esto es un click");
});


//$(selector).accion()
$(()=>{
    $(".btnMensaje").click(()=>{
        $("p").append("Hola, estoy utilizando jQuery") // O console.log("Hola, estoy utilizando jQuery")
    })
})