let nombre = '';

let titulo = document.createElement('h1'); //creamos un elemento html segun el parametro que le pasamos
titulo.innerHTML = 'Manejo del Dom'; //HTML dentro de la etiqueta
document.body.append(titulo); // append es añadir a

let main = document.createElement('main');
let textoPrincipal = document.createElement('p');

textoPrincipal.innerHTML = 'El DOM es una representacion virtual de el documento completo que puede interpretar y modificar javascript';

main.append(textoPrincipal);
document.body.append(main);

let separacion = document.createElement('hr');

document.body.append(separacion);

let form = document.createElement('div');
let formInput = document.createElement('input');
let boton = document.createElement('button');

formInput.type = 'text';
formInput.setAttribute('name', 'nombre');
formInput.setAttribute('placeholder','Nombre');

boton.innerHTML = 'Enviar';

boton.addEventListener('click', 
function() {
    let nuevoElemento = document.createElement('p');
    nuevoElemento.innerHTML = formInput.value;
    document.body.append(nuevoElemento);
});

form.append(formInput);
form.append(boton);
main.append(form);

