/*
//bad code
function addTodo1() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const container = document.getElementById('todos');
    const data = todos.innerHTML;
    todos.innerHTML = data +
        `<div>${title}</div>
        <div>${description}</div>
        <button>Mark as Done</button>
        `
}*/

let globalId = 1;

function addTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const parent = document.getElementById('todos');

    parent.appendChild(createChild(title, description, globalId++));
}

function createChild(title, description, id) {
    const child = document.createElement("div");

    const child1 = document.createElement("div");
    child1.innerHTML = title;

    const child2 = document.createElement("div");
    child2.innerHTML = description;

    const child3 = document.createElement("button");
    child3.innerHTML = "Mark as Done";
    child3.setAttribute("onclick", `markAsDone(${id})`);

    const child4 = document.createElement('div');       //break
    child4.innerHTML = "------------";

    child.appendChild(child1);
    child.appendChild(child2);
    child.appendChild(child3);
    child.appendChild(child4);                          //break

    child.setAttribute("id", id);

    return child;
}

function markAsDone(id) {
    const element = document.getElementById(id);
    element.children[2].innerHTML = "Done!"
}