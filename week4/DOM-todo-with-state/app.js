// state will be an array
// every element of state will have title, description and id
// at every render, clear previous todos and show todos in current state


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

function updateDomAccToState(state) {
    const child = document.getElementById('todos');

    // clear state
    child.innerHTML = "";

    for (let i = 0; i < state.length; i++) {
        child.appendChild(createChild(state[i].title, state[i].description, state[i].id));
    }
}

/*
// hard-coded state
updateDomAccToState([
    {
        title: "go to gym",
        description: "go to gym from 5-7 everyday",
        id: 1
    },
    {
        title: "go to gym-2",
        description: "go to gym from 5-7 everyday-2",
        id: 2
    }
]);*/

window.setInterval(async () => {
    const response = await fetch('https://sum-server.100xdevs.com/todos');
    const todos = await response.json();

    updateDomAccToState(todos.todos);
}, 3000);