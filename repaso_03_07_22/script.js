let personas = [
  { name: "max", age: 36, mascotas:[{nombre:'Michi', edad:9},{nombre:'rata', edad:1}]  },
  { name: "Edu", age: 35, mascotas:[] },
  { name: "Sof", age: 24,mascotas:[] },
];

let nombres = personas.map((persona) => {
  return persona.name;
});

let mascotas = [];
personas.forEach((persona) => { persona.mascotas.forEach((mascota) => { mascotas.push(mascota)})})



console.log(mascotas);


let caras = [
  [5], [3,7],[3,5,7],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9] 
];

function pintarCara(cara)
{
  for(let i =1; i<=9; i++){
    document.getElementById(`posicion_${i}`).className = ""}
  
  cara.forEach((posicion) => {document.getElementById(`posicion_${posicion}`).classList.add("punto")});
}

function tirarDado(){
  let resultado = Math.round(Math.random()*5);
  pintarCara(caras[resultado]);
}




