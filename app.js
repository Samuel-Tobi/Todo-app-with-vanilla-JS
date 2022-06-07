const list = document.getElementById("todos-list");
const addBtn = document.getElementById("todo-add-btn");
const addInput = document.getElementById("todo-input");

function createTodo() {
  let text = addInput.value;

  if (text === "") {
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.textContent = text;

  let remove = document.createElement("span");
  remove.classList.add("remove");
  remove.innerHTML = "&#10007";

  li.appendChild(checkbox);
  li.appendChild(paragraph);
  li.appendChild(remove);
  list.appendChild(li);

  addInput.value = "";
}

addBtn.addEventListener("click", createTodo);
addInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTodo();
  }
});
