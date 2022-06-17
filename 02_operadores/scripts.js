/* Operaciones con JS */
//Asignacion
let var1 = 'su valor';

// Operadores Aritmeticos

let sumatoria = 5 + 6;
let resta = 6 - 3;
let multiplicacion = 3 * 2;
let division =  12 / 3;
let modulo = 3 % 2; //Modulo es el resto de la division

sumatoria = sumatoria + 5; 
sumatoria += 5;
resta = resta - 5; 
resta -= 5;
multiplicacion = multiplicacion * 5;
multiplicacion *= 5;
let potencia = 5**2;
division = division /2;
division /= 2;

console.groupCollapsed('Operadores Aritmeticos')
console.log('sumatoria');
console.log(sumatoria);
console.log('resta');
console.log(resta);
console.log('multiplicacio');
console.log(multiplicacion);
console.log('division');
console.log(division);
console.log('potencia');
console.log(potencia);
console.groupEnd()


//Operadores de comparacion
let comparable1 = 5;
let comparable2 = 10;
let comparable3 = 10;
let comparable4 = '10';

let mayorQue = 5 > 10; //Mayor que
let menorQue = 5 < 10; //Menor que

let mayorOIgualQue = 5 >= 10; //Mayor que
let menorOIgualQue = 5 <= 10; //Menor que

let igualQue = 'hola' == 'Hola' //Igual que
let igualTipoYValor = 1 === '1';

let diferenteQue = 1 != '1';
let diferenteTipoYValorQue = 1 !== '1';

//Concatenacion
let variable1 = 'Un Texto ';
let variable2 = 'concatenado';
let concatenacion = variable1 + variable2;
 
let comparacionRara =  1 + 2 + '2';

console.log(comparacionRara);