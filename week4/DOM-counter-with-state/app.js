let state = {
    count: 0
};

function buttonComponent(count) {
    const button = document.createElement('button');    // create component
    button.innerHTML = `Counter ${count}`;              // add html
    button.setAttribute('onclick', 'onPress()');        // add onclick
    return button;
}

function onPress() {
    state.count++;              // state update
    buttonComponentReRender();  // render component
}

function buttonComponentReRender() {
    document.getElementById('buttonParent').innerHTML = "";                             // remove old component
    document.getElementById('buttonParent').appendChild(buttonComponent(state.count));  // append new component
}

buttonComponentReRender()