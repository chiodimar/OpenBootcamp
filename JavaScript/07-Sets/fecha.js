let fechaHoy = new Date();
console.log(fechaHoy);

const Cumple = 26/02/1985;

const fechaCumple = new Date(1985,1,26);
console.log(fechaCumple);

console.log(fechaHoy > fechaCumple);

const mesCumple = fechaCumple.getMonth() + 1;
console.log(mesCumple);

const anyo = fechaCumple.getFullYear();
console.log(anyo);