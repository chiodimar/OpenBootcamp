const miFuncion = val => { 
    if ( typeof val === "number"){
        return 2* val
    } throw new Error("El valor debe ser un numero")
    }

const nuemro = 43;

try{
    //Codigo que puede fallar
    console.log("Esta ejecutandose de manera coerrecta");
    const elDoble = miFuncion(nuemro);
    console.log(elDoble);
}catch(e){
    // En caso de fallar, quiero que ejecutes
    console.log(`El valor de e: ${e}`);
    console.log("ERROR!!");
} finally{
    console.log("Esto se va a ejecutar se produzca o no un error");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError