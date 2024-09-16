export default function todoList() {}

const btnAddTask = document.getElementById("btn-add-task");

const listTask = document.getElementById("list-task");

const errorTask = document.getElementById("error-task");

btnAddTask.addEventListener("click", (e) => {
  //Texto de input
  let newTaskText = document.getElementById("input-task").value;

  //Valida si esta vacio el input
  if (newTaskText === "") {
    errorTask.classList.remove("none-error");
    setInterval(() => {
      errorTask.classList.add("none-error");
    }, 5000);

    return;
  }

  //Creando nuevo elemento
  let newTask = document.createElement("li");
  newTask.textContent = newTaskText;
  newTask.classList.add("new-task");

  //Creando boton eliminar
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "Eliminar";
  btnDelete.classList.add("btn-delete");
  btnDelete.onclick = function () {
    newTask.remove();
  };

  //Agregar boton eliminar a la tarea
  newTask.appendChild(btnDelete);

  listTask.appendChild(newTask);

  document.getElementById("input-task").value = "";
});
