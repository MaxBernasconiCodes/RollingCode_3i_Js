let inputTarea = document.getElementById("tarea");
let lista = document.getElementById("tareas");
let btnAgregar = document.getElementById("btnAddTarea");
let tareas = JSON.parse(localStorage.getItem("tareas"));
console.log(tareas);

btnAgregar.addEventListener("click", agregarTarea);
cargaInicial();

function cargaInicial() {
  tareas.forEach((tarea) => {
    let liNuevo = document.createElement("li");
    liNuevo.addEventListener("click", (event) => {
      event.target.remove();
    });
    liNuevo.innerHTML = tarea;
    lista.append(liNuevo);
  });
}

function agregarTarea() {
  let liNuevo = document.createElement("li");
  liNuevo.addEventListener("click", (event) => {
    event.target.remove();
  });
  liNuevo.innerHTML = inputTarea.value;
  lista.append(liNuevo);
  tareas.push(inputTarea.value);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  inputTarea.value = "";
  inputTarea.focus();
}
