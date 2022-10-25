const datosPersonales = {
    nombre: "Mariano",
    apellido: "Chiodi",
    edad: 37,
    altura: 1.9,
    eresDesarrollador: true,
}

const edad = datosPersonales.edad
console.log(edad);

let listaObjetos = [{
    nombre: "Mariano",
    apellido: "Chiodi",
    edad: 37,
    altura: 1.9,
    eresDesarrollador: true,
},{
    nombre: "Fernando",
    apellido: "Rodriguez",
    edad: 32,
    altura: 1.7,
    eresDesarrollador: false,
},{
    nombre: "Bruno",
    apellido: "Pages",
    edad: 35,
    altura: 1.8,
    eresDesarrollador: false,
}
];

listaObjetos.sort((a,b) => b.edad - a.edad);
console.log(listaObjetos);

