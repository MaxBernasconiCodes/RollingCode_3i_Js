

let productos = [
  {
    titulo: "Hamburguesa",
    descripcion: "Pan, Hambur de 110gr, chedar, bacon",
    imagenes: [
      {
        srcBase: "https://adrianacotte.com/wp-content/uploads/2021/05/hamburguesa01.jpeg",
        srcGrande: "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2021/04/MOSTAZA_-MEGA-BOOM_1.jpg?resize=1050%2C1312",
      },
      {
        srcBase: "httt direccion de imagen para movil",
        srcGrande: "http imagen grande ",
      },
      {
        srcBase: "httt direccion de imagen para movil",
        srcGrande: "http imagen grande ",
      },
    ],
  },
  {
    titulo: "Milanesa",
    descripcion: "Pan, Mila de carne , Lechuga, Tomate",
    imagenes: [
      {
        srcBase: "https://news.agrofystatic.com/dia_de_la_milanesa_en_argentina.jpg?d=620x375",
        srcGrande: "http imagen grande ",
      },
      {
        srcBase: "httt direccion de imagen para movil",
        srcGrande: "http imagen grande ",
      },
      {
        srcBase: "httt direccion de imagen para movil",
        srcGrande: "http imagen grande ",
      },
    ],
  },
];

let card1Object =  {
  titulo: document.getElementById('Card1Titulo'),
  descripcion: document.getElementById('Card1Descripcion'),
  imagenes: [
    {
      srcBase: document.getElementById('card1Img1Source'),
      srcGrande:  document.getElementById('card1Img1Img'),
    },
    {
      srcBase:  document.getElementById('card1Img2Source'),
      srcGrande:  document.getElementById('card1Img2Img'),
    },
    {
      srcBase:  document.getElementById('card1Img3Source'),
      srcGrande: document.getElementById('card1Img3Img'),
    },
  ],
}

card1Object.titulo.innerHTML = productos[0].titulo;
card1Object.descripcion.innerHTML = productos[0].descripcion;
card1Object.imagenes[0].srcBase.srcset = productos[0].imagenes[0].srcBase;
card1Object.imagenes[0].srcGrande.src = productos[0].imagenes[0].srcGrande;

let tituloSociales = document.getElementById('tituloSociales'); // traer del documento un elemento
tituloSociales.innerHTML = ''; //Modificar una propiedad
let invento = document.getElementById('card1Img1Img');
invento.setAttribute('inventado', 'un valor inventado');
//setea ( pone el valor) en un atributo el valor que le pasemos


let atributotraido = document.getElementById('card1Img1Img').getAttribute('inventado');
console.log(atributotraido);

// Creacion de Elementos al DOM

let elCreado = document.createElement('h1');
elCreado.innerHTML = 'Aqui va un titulo';
let header = document.getElementsByTagName('header')[0]; //Seleccion del primer elemento por etiqueta

//Obtencion de los elementos a usar del DOM
let contenedorPricipal = document.getElementsByTagName('main')[0];

//creacion de elementos
let divPrincipal = document.createElement('div');
let imagen = document.createElement('img');
let texto = document.createElement('p');

// agregar los datos y valores
imagen.setAttribute('src', productos[1].imagenes[0].srcBase )
texto.innerText = productos[1].titulo;

// Agregamos los estilos por clases
divPrincipal.classList.add('cardExtraCreada'); // agrega una clase a la lista
divPrincipal.classList.add('reemplazable');
divPrincipal.classList.add('cardExtraCreada2');
divPrincipal.classList.remove('cardExtraCreada2'); //quita una clase
divPrincipal.classList.replace('reemplazable', 'unaNueva'); //reemplaza una clase
divPrincipal.classList.toggle('hide');// si la clase no esta , la agrega
divPrincipal.classList.toggle('hide');//si la clase esta, la quita

// Adjuntar las partes a los lugares que les corresponde
divPrincipal.append(imagen);
divPrincipal.append(texto);
contenedorPricipal.append(divPrincipal);