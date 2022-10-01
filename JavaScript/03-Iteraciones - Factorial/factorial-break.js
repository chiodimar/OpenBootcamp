let i = 1;
let resultado = 1;

while (i <= 10) {
    resultado = resultado * i;
    i ++;
   if(i == 7){
        break;
    }
    console.log(resultado);
}
console.log(resultado);