const btnAddTask = document.getElementById("btn-add-task");
const listTask = document.getElementById("list-task");
export default function todoList() {
  btnAddTask.addEventListener("click", (e) => {
    //Texto de input

    let newTaskText = document.getElementById("input-task").value;

    console.log(newTaskText);
    if (newTaskText === "") {
      return;
    }
    //Creando nuevo elemento
    createTask(newTaskText);
    document.getElementById("input-task").value = "";
  });
}
function createTask(newTaskText) {
  let newTask = document.createElement("li");
  newTask.textContent = newTaskText;
  newTask.classList.add("new-task");
  btnDelete(newTask);
  listTask.appendChild(newTask);
}

function btnDelete(newTask) {
  //Creando boton eliminar
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "Eliminar";
  btnDelete.classList.add("btn-delete");
  btnDelete.onclick = function () {
    newTask.remove();
  };
  //Agregar boton eliminar a la tarea
  newTask.appendChild(btnDelete);
}
