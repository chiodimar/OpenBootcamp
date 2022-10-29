// -- 1 --
function siempreTrue() {
    return true
}
console.log(siempreTrue());

// -- 2 --

const saludo = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('Hola soy una promesa');; 
        },5000);
    }); 
}
saludo();

// -- 3 --

// Generador de ID
function* generarId (){
    let id = 0;
    while(true){
        id = id +2
        if(id === 20){
            return id
        }
        yield id // Esperando hasta que vuelva a llamar
    }
}

const gen = generarId();

console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
