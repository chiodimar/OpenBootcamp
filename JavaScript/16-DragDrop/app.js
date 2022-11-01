// Selecciona los parrafos por la clase .parrafo
const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

// El forEach no se bien que es. Pero le mando un addEventListener (escuche) un dragstart para cuando empieza a aggarar y un dragend para cuando suelta. Y le mando que mande un clg en cada uno de estos
parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event => {
                console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
                parrafo.classList.add("dragging"); // le agrego una clase llamada dragging mientras lo arrastro
                event.dataTransfer.setData("id", parrafo.id)
                const elemento_fantasma = document.querySelector(".imagen-fantasma")
                event.dataTransfer.setDragImage(elemento_fantasma,0,0)
            } )
    parrafo.addEventListener("dragend", ()=>{
        console.log("Final del agarre");
        parrafo.classList.remove("dragging"); // le quito la clase antes agregada
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover",event=> {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy" // Son los drop effect "move"
                console.log("Drag Over: ");
                
    } )
    seccion.addEventListener("drop", event =>{
        //console.log("Lo solté");
        //console.log("Párrafo id: ", id_parrafo);
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo) 
        // Trate de eliminar el parrafo pero no me salio
        const papelera = event.dataTransfer.getData("id")
        const eliminar = document.getElementById(papelera)
        seccion.remove(eliminar)
    })
})
 