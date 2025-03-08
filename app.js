const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const taskText = todoInput.value.trim(); 

  if (taskText !== "") {
    addTodoItem(taskText); 
    todoInput.value = "";
  }
});

function addTodoItem(taskText) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";
  editButton.addEventListener("click", () => editTodoItem(span));
  li.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => deleteTodoItem(li));
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

function editTodoItem(span) {
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}

function deleteTodoItem(li) {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove(); 
  }
}