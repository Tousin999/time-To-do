//to-list app
let todoData = JSON.parse(localStorage.getItem('todoData')) || [];
class UserTodo{
    constructor(todo, date){
        this.todo = todo;
        this.date = date;
        this.id = Date.now();
    }
}

//let user enter there data
const userText = document.querySelector('.js-to-do-text');
const userDate = document.querySelector('.js-user-date')
const submitBtn = document.querySelector('.js-submit-btn');
const userDataOutput = document.querySelector('.js-user-data-output');

renderTodo();
//get the data and store it
submitBtn.addEventListener('click',()=>{
   const userTodo = new UserTodo(userText.value, userDate.value);
    todoData.push(userTodo);
    userText.value = ''
    renderTodo();
})

function renderTodo(){
    let html = ''
    todoData.forEach((data)=>{
        html += `<p>Todo: ${data.todo}, Date: ${data.date}</p><button class="js-delete-btn" data-id="${data.id}">Delete</button>`
    })
    userDataOutput.innerHTML = html;
    attachDeleteListener();
    localStorage.setItem('todoData', JSON.stringify(todoData));
}

function attachDeleteListener(){
    document.querySelectorAll('.js-delete-btn').forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const deleteId = btn.dataset.id;
            todoData = todoData.filter((userTodo)=> userTodo.id != deleteId);
            renderTodo();
        })
    })
}


