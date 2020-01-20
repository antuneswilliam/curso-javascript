var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos () {
    listElement.innerHTML = '';

    for (const todo of todos) {
        var todoElement = document.createElement('li');

        todoElement.setAttribute('class', 'list-group-item');        

        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('button');

        linkElement.setAttribute('type', 'button');
        linkElement.setAttribute('class', 'btn btn-danger');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';

    renderTodos();
    saveToStoreage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStoreage();
}

function saveToStoreage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}