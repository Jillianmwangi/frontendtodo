let form = document.querySelector('.form');
let text = document.querySelector('.text');
let todolist = document.querySelector('.todolist');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const todo = document.createElement('div')
    let todotext = text.value;
    todo.innerHTML = `
      <div class="todolist">
       <div class="checkbox"><img src="/todo-app-main/images/icon-check.svg" alt=""></div>
       <button class="close"><img src="/todo-app-main/images/icon-cross.svg" alt=""></button>
      </div>
    `;

    todolist.appendChild(todo);

    document.querySelector('.text').value = '';
});

