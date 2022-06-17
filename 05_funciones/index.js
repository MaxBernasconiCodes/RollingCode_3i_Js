// let numero1 = prompt("Ingrese el primer numero");
// console.log(numero1);

// let numero2 = prompt("Ingrese el segundo numero");
// console.log(numero2);

// let operacion = prompt("ingrese la operacion");

function sumar(num1 = 0 , num2 = 0) {
  return parseInt(num1) + parseInt(num2);
}

function restar(num1 = 0, num2 = 0) {
  return num1 - num2;
}

function multiplicar(num1 = 1, num2 = 1) {
  return num1 * num2;
}

function dividir(num1, num2) { return num1 / num2;};

const dividi = (num1,num2) => {return num1/num2};



// if(operacion == 'sumar'){
//     console.log(sumar(numero1, numero2))}

// else if(operacion == 'restar')
// { console.log(restar(numero1, numero2))}

// else if(operacion == 'multiplicar')
// { console.log(multiplicar(numero1, numero2))}

// else if(operacion == 'dividir')
// { console.log(dividir(numero1, numero2))}

// else{
//     console.log('Ingreso una operacion erronea')
// }

// switch (operacion) {
//   case "sumar":
//     alert(sumar(numero1 , numero2));
//     break;
//   case "restar":
//     alert(restar(numero1, numero2));
//     break;
//   case "multiplicar":
//     alert(multiplicar(numero1, numero2));
//     break;
//   case "dividir":
//     alert(dividir(numero1, numero2));
//     break;
//   default:
//     alert("Ingreso una operacion erronea");
//     break;
// }