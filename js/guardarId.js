export default function guardarId() {
  //Variables del DOM
  const inputNombre = document.getElementById("input-nombre");
  //const inputApellido = document.getElementById("input-apellido");
  const btnObj = document.getElementById("btn-obj");
  const listaObj = document.getElementById("lista-obj");
  const inputTaskUser = document.getElementById("input-task-user");
  //Variables
  const usuarios = [];
  let id = 0;
  //Asignando boton para recibir datos de inputs
  btnObj.addEventListener("click", (e) => {
    if (inputNombre.value === "") {
      return;
    }
    // Creando nuevo elemento li
    let nuevaLista = document.createElement("li");
    nuevaLista.classList.add("new-task");
    //Agregando contenido saludo a la li

    let nombre = document.createElement("p");
    nombre.textContent = inputNombre.value;
    nuevaLista.appendChild(nombre);
    listaObj.appendChild(nuevaLista);

    /*  let btnAddTask = document.createElement("button");
    btnAddTask.textContent = "Agregar Tarea";
    btnAddTask.classList.add("btn-add-task");
    btnAddTask.onclick = function () {}; 
    nuevaLista.appendChild(btnAddTask);
    */

    let tareas = document.createElement("p");
    tareas.textContent = `${inputTaskUser.value}`;
    tareas.classList.add("text-task");
    nuevaLista.appendChild(tareas);

    //Agregando boton eliminar
    let btnDeleteUser = document.createElement("button");
    btnDeleteUser.textContent = "Eliminar";
    btnDeleteUser.classList.add("btn-delete");
    //Funcion que elimina el li del usuario
    btnDeleteUser.onclick = function () {
      nuevaLista.remove();
    };
    nuevaLista.appendChild(btnDeleteUser);
    //Llamando función y enviando parámetros id, nombre y apellido al objeto
    //generadoraObj(id, inputNombre.value, inputApellido.value);
    //Aumentando 1 al id
    id++;
    document.getElementById("input-nombre").value = "";
    //document.getElementById("input-apellido").value = "";
    document.getElementById("input-task-user").value = "";
  });
  //Funcion creadora de objeto de id, nombre y apellido
  function generadoraObj(id, nombre, apellido) {
    const objeto = {
      id: id,
      nombre: nombre,
      apellido: apellido,
    };
    usuarios.push(objeto);
    //console.log(usuarios);
  }
}

/* 
//Recorriendo el array creado en el generador objeto de los datos
    usuarios.forEach((el) => {
      //Creando elemento li
      let usuario = document.createElement("li");
      usuario.textContent = `Hola ${el.nombre} ${el.apellido}, tu id es: ${el.id}`;
      usuarios.shift(); //Eliminando primer elemento del array usuarios
      console.log(usuarios);
      listaObj.appendChild(usuario); //Agregando elemento li a ul
    }); */
