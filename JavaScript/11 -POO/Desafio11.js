class Estudiante {
    constructor(nombreID,edadID){
        this.nombre        = nombreID
        this.edad          = edadID
        this.asignaturas   = ["Javascript", "HTML", "CSS"]
    }
    obtenDatos(){
        // console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`);
        let referencia = [this.nombre , this.edad, this.asignaturas ]
        return referencia
    }
};

const nuevo_estudiante = new Estudiante ("Saul", 23);
console.log(nuevo_estudiante);
let datos = nuevo_estudiante.obtenDatos();
console.log(datos);

