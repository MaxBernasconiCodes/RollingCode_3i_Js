let inputTitulo = document.getElementById("inpTitulo");
let inputImagenURL = document.getElementById("inpImagenURL");

function addProducto() {
  // tomar los valores de los imputs
  // creacion de los elemntos
  // agregado de los valores a los elemntos

  let divPrincipal = document.createElement("div");
  let imagen = document.createElement("img");
  let texto = document.createElement("p");

  // agregar los datos y valores
  imagen.setAttribute("src", inputImagenURL.value);
  texto.innerText = inputTitulo.value;

  // Agregamos los estilos por clases
  divPrincipal.classList.add("cardExtraCreada"); // agrega una clase a la lista

  // Adjuntar las partes a los lugares que les corresponde
  divPrincipal.append(imagen);
  divPrincipal.append(texto);
  contenedorPricipal.append(divPrincipal);

  // limpiamos valor de campos
  inputTitulo.value = '';
  inputImagenURL.value= '';
}

function cambioDetexto() {
  btnAgregar.innerText = inputTitulo.value;
}

function checkearSinMayusculas() {
  inputTitulo.value.length < 3
    ? inputTitulo.classList.add("error")
    : inputTitulo.classList.remove("error");
}

function cambioDeFondo(){
  let color = document.getElementById("btnCambio").value;
  console.log(color);
}
function checkState(){
  let status = document.getElementById("checkboxAgregar").checked;
  console.log(status);
}