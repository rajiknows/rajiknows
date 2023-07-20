const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");


toDoButton.addEventListener("click",addTodo);
toDoList.addEventListener("click", deletecheck);

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creates

    const newtodo = document.createElement('li');
    newtodo.innerText= toDoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

    //completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<span class="material-symbols-rounded">done</span>'
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    // trassh button
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<span class="material-symbols-rounded">delete</span>'
    trashButton.classList.add('deleted-btn');
    todoDiv.appendChild(trashButton);

    // append to list
    toDoList.appendChild(todoDiv);
    toDoInput.value="";
}

function deletecheck(e){
    const item = e.target;
    if(item.classList[0]==="deleted-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });

    }

    if(item.classList[0]==="completed-btn"){
        const todo =item.parentElement;
        todo.classList.toggle('completed');


    }
}
