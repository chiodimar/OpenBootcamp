let compra = [ "Pan", "Leche", "Aceitunas","Queso","Manteca","Vino"];

compra.push("Aceite de Girasol");

console.log(compra);

compra.pop();

console.log(compra);

let peliculas = [
    {titulo: "Volver al Futuro", director: "Zenekis",         fecha: 1985},
    {titulo: "Jurassic Park",    director: "Steven Spielberg",fecha: 1993},
    {titulo: "Whiplash",         director: "Damien Chazelle", fecha: 2014},
];

let posteriores = peliculas.filter(valor => valor.fecha > 2010);
console.log(posteriores);

let directores = peliculas.map(valor => valor.director);
console.log(directores);

let titulos = peliculas.map(valor => valor.titulo);
console.log(titulos);

let titulosDirectores = titulos.concat(directores);
console.log(titulosDirectores);

let titulosDirectoresProp = [...titulos, ...directores];
console.log(titulosDirectoresProp);