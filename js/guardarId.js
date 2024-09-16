export default function guardarId() {
  //Variables del DOM
  const inputNombre = document.getElementById("input-nombre");
  const inputApellido = document.getElementById("input-apellido");
  const btnObj = document.getElementById("btn-obj");
  const listaObj = document.getElementById("lista-obj");
  //Variables
  const usuarios = [];
  let id = 0;
  //Asignando boton para recibir datos de inputs
  btnObj.addEventListener("click", (e) => {
    // Creando nuevo elemento li
    let nuevaLista = document.createElement("li");
    nuevaLista.classList.add("new-task");
    //Agregando contenido saludo a la li
    nuevaLista.textContent = `${inputNombre.value} ${inputApellido.value}`;
    listaObj.appendChild(nuevaLista);

    let btnDeleteUser = document.createElement("button");
    btnDeleteUser.textContent = "Eliminar";
    btnDeleteUser.classList.add("btn-delete");

    btnDeleteUser.onclick = function () {
      nuevaLista.remove();
    };
    nuevaLista.appendChild(btnDeleteUser);
    //Llamando función y enviando parámetros id, nombre y apellido al objeto
    generadoraObj(id, inputNombre.value, inputApellido.value);
    //Aumentando 1 al id
    id++;
    console.log(usuarios);
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
    document.getElementById("input-nombre").value = "";
    document.getElementById("input-apellido").value = "";
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
