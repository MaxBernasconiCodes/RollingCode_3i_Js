var textoNuevo; // Declaracion de variable tipo var
textoNuevo =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate, excepturi officia esse deleniti libero voluptatibus suscipit harum cumque sint inventore aspernatur iure quidem illo, quasi odit labore! Laborum, dolor!"; //Asignacion de un valor a la variable

var otraVariable = "otra variable distinta"; // Declaracion y asignacion en una sola linea
console.groupCollapsed("inicio");
console.log(textoNuevo);
console.log(otraVariable);
console.groupEnd();

var variableGlobal = 'var valor inicial'; //Var es redeclarable y reasignable;
console.groupCollapsed("Difentes tipos de variable");

console.groupCollapsed("var");
console.log(variableGlobal);
variableGlobal = 'Segundo valor, este es por reasignacion';
console.log(variableGlobal);

var variableGlobal = 'var es reasignable y redeclarable';
console.log(variableGlobal);
console.groupEnd();


console.groupCollapsed('let')
let variableLocal; //declaracion
variableLocal = 'Esto es un let en su asignacion'; //asignar
console.log(variableLocal);
// let no es redeclarable
variableLocal = 'let es reasignable, pero no redevclarable';
console.log(variableLocal);
console.groupEnd()


console.groupCollapsed('const')
const variableConstante = 'Un valor constante no se puede ni redeclara, ni reasignar'; //declaracion va si o si con asignacion en constantes

console.log(variableConstante);
// const no es redeclarable ni reasignable
console.groupEnd()
console.groupEnd();

console.group('Tipos de valores de variables');
let texto = 'Esto es un texto';
let numero = 123456789.15; // enteros y decimales | int y float
let booleanoVerdadero = true;
let booleanoFalso = false;
let arreglo = ['un texto', 1234, true, 'otro texto', texto, booleanoFalso];
let arregloAniodado = [arreglo, arreglo, 'un texto'];
let objeto = {
    nombre:'Max',
    apellido:'Bernasconi',
    edad:36
}
arreglo[2] = false;
objeto.nombre = 'Maximiliano';

console.log(objeto.nombre);
console.groupEnd();