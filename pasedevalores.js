//valor por referencia vs valor por valor

let objeto1 = {
    nombre:'Max'
}

let ObjetoRefencia = objeto1;
let ObjetoValor = {
    nombre: objeto1.nombre,
}

console.log('objeto es',objeto1);
console.log('ObjetoRefencia es',ObjetoRefencia);
console.log('ObjetoValor es',ObjetoValor);

objeto1.nombre = 'Cari';
ObjetoValor.nombre = 'Marcelo';
console.log('------------------------')

console.log('objeto es',objeto1);
console.log('ObjetoRefencia es',ObjetoRefencia);
console.log('ObjetoValor es',ObjetoValor);