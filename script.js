const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//functions
const addList = (event) => {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //buttons
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('completed-btn');
    todoDiv.appendChild(completeButton);
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //append tododiv to ul
    todoList.appendChild(todoDiv);
    todoInput.value = ''







}

const deleteComplete = (event) => {
    const item = event.target;
    if (item.classList.contains('delete-btn')) {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove()

        })

    } else if (item.classList.contains('completed-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed')


    }

}


//event-listeners
todoButton.addEventListener('click', addList)
todoList.addEventListener('click', deleteComplete)