let itemsTitle = document.getElementById("items-title");

let itemsArr = [
  {
    img: "access/1_bthRXJ_FBspSEijOWIRM2A.png",
    title: "JavaScript",
  },
  {
    img: "access/download.png",
    title: "Python",
  },
  {
    img: "access/1_bthRXJ_FBspSEijOWIRM2A.png",
    title: "Python",
  },

  {
    img: "access/1_bthRXJ_FBspSEijOWIRM2A.png",
    title: "React",
  },
  {
    img: "access/1_bthRXJ_FBspSEijOWIRM2A.png",
    title: "JavaScript",
  },
  {
    img: "access/1_bthRXJ_FBspSEijOWIRM2A.png",
    title: "Python",
  },
  {
    img: "access/1_bthRXJ_FBspSEijOWIRM2A.png",
    title: "Python",
  },

  {
    img: "access/1_bthRXJ_FBspSEijOWIRM2A.png",
    title: "React",
  },
];

let setItems = () => {
  return (itemsTitle.innerHTML = itemsArr.map((x) => {
    let { img, title } = x;
    return `
    <div class="items">
    <img
    src="${img}"
    width="200px"
    height= "100px"
    alt=""
    srcset=""
    />
    <div class="title">${title}</div>
    </div>
`;
  }).join(""));
};

setItems();

let todos = document.getElementById("todos");
let task = document.getElementById("task");

let inputTodo = () => {
  return (todos.innerHTML = `
        <div class="input-button">
            <input type="text" id="input" onkeypress="enterButton(event);">
            <div class="button">
                <button id="clear-button" onclick="clearTodo()">clear</button>
                <button id="add-button" onclick="addTodo()">Add</button>
            </div>
        </div>
        `);
};

inputTodo();
var input = document.getElementById("input");
let addTodo = () => {
  if (input.value == "") {
    return;
  } else {
    let todoList = document.createElement("div");
    task.appendChild(todoList);
    todoList.className = "todo-list";
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checkbox";
    todoList.appendChild(check);
    let todo = document.createElement("div");
    todo.className = "todo";
    todo.innerHTML = input.value;
    todoList.appendChild(todo);
  }
  input.value = "";
  saveTodo();
};

let enterButton = (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
};

let arr = ["Maxim", "Joseph", "Cherif"];

let clearTodo = () => {
  let check = document.querySelectorAll(".checkbox");
  let i;
  for (i in check) {
    if (check[i].checked) {
      check[i].parentElement.remove();
    }
  }
  saveTodo();
};

let saveTodo = () => {
  localStorage.setItem("todo", task.innerHTML);
};

let callTodo = () => {
  task.innerHTML = localStorage.getItem("todo");
};
callTodo();
