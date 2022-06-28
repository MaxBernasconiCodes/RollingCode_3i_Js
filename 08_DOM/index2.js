let titulo = document.getElementById('titulo'); //get = traer
titulo.innerHTML = 'un nuevo valor desde js';

let elementosDeBusqueda = document.getElementsByTagName('h5');
console.log(elementosDeBusqueda);

function reemplazar(){
    console.log(elementosDeBusqueda);
}