//Funciones de Arrays

let personas = ["Max", "Sofi", "Marcelo", "Mario"];
// for(let i = 0; i < lista1.length; i++){
//     console.log(lista1[i]);
// }

// foreach | POR cada elemento
personas.forEach((persona) => {
  console.log("nombre " + persona);
});

// map | CON cada elemnto
let nuevoarray = personas.map((persona) => {
  return persona + " del map";
});

console.log(personas);
console.log(nuevoarray);
console.clear();

// filter | ARMAR un nuevo array con los elementos que coincidan
//Filter devuelve un ARRAY de ls elementos que coiuncidan con la busqueda
let mascotas = [
  { id:1, nombre: "Michi", edad: 9 },
  { id:2, nombre: "Rata", edad: 1 },
  { id:3, nombre: "Siro", edad: 12 },
  { id:4, nombre: "Dogo", edad: 3 },
  { id:5, nombre: "Asma", edad: 19 },
  { id:6, nombre: "Pitu", edad: 7 },
];

let mascotasGrandes = mascotas.filter(
    (mascota) => mascota.edad > 5);

console.log(mascotasGrandes);
console.clear();

// Splice - Divide un array en dos -  desde la posicion indicada en el primer parametro, una cantidad de elementos como el numero indicado en el sengudo parametro
 let resultadoSplice = mascotas.splice(2,3);
 console.log(resultadoSplice);

// Slice - Crea un nuevo array con los elementos que se le pide desde la pocicion indicada en el primer parametro hasta la posicion indicada en el segundo parametro

// let resultadoSlice = mascotas.slice(-4, -3);
// console.log(resultadoSlice);

//find 

let mascota1 = mascotas.find((mascota)=>mascota.id == 96);

let mascota2 = mascotas.findIndex((mascota)=>mascota.nombre == 'Michi');
console.log(mascota1);
