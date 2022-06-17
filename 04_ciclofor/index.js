// while

let contador = 0;
let finalizacion = 5;

while(contador < finalizacion) /*condicion de entrada*/
{
    console.log(`Me ejecuto y contador es ${contador}`);
    contador++;
}
console.log('Ciclo finalizado');


for(let i = 0; i < finalizacion; i++){
    console.log(`Me ejecuto e i es ${i}`);
}

console.log('For finalizado');
console.clear();



let arrayEjemplo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

for(let i = 0; i < arrayEjemplo.length; i++){
    console.log(`mi array es de ${arrayEjemplo.length} unidades`);
    console.log('El valor de esta casilla del array es ' + arrayEjemplo[i]);
}

console.clear();

let array2 = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < array2.length; i++){
    array2[i] *= 3;
}

console.log(array2);