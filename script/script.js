//to-list app
// TO-DO error-handling with localstorage
let todoData = JSON.parse(localStorage.getItem('todoData')) || [];


class UserTodo{
    constructor(todo, date){
        this.todo = todo;
        this.date = date;
        this.id = Date.now();
        this.isComplete = false;
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
    if(!userText.value){
        window.alert("no to-do, please enter a to-do");
        return;
    }
    if(!userDate.value){
        window.alert("enter a date value");
        return;
    }
    const userTodo = new UserTodo(userText.value, userDate.value);
    todoData.push(userTodo);
    userText.value = '';
    userDate.value = '';
    renderTodo();
})

function renderTodo(){
    let html = ''
    todoData.forEach((data)=>{
        //TO-DO add function to checkbox
        html += `<p>Todo: ${data.todo}, Date: ${data.date}</p><button class="js-delete-btn btn btn2" data-id="${data.id}">Delete</button><input type="checkbox" >`
    })
    userDataOutput.innerHTML = html;
    attachDeleteListener();
    localStorage.setItem('todoData', JSON.stringify(todoData));
}

function attachDeleteListener(){
    // Event Delegation
    userDataOutput.addEventListener('click',(event)=>{
           if(event.target.classList.contains('js-delete-btn')){
            const deleteId = event.target.dataset.id;
            todoData = todoData.filter((userTodo)=> userTodo.id != deleteId);
            renderTodo();
           }
           //TO-DO modify tododata base on checkBox
        })
    }



