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
        srcBase: "httt direccion de imagen para movil",
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

document.getElementById('card1Img1Img').setAttribute('inventado', 'un valor inventado')
//setea ( pone el valor) en un atributo el valor que le pasemos


let atributotraido = document.getElementById('card1Img1Img').getAttribute('inventado');
console.log(atributotraido);