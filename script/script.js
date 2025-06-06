//to-list app
// TO-DO error-handling with localstorage
let todoData;
try{
    todoData = JSON.parse(localStorage.getItem('todoData')) || [];
}catch(err){
    console.log(err);
    todoData = [];
}


class UserTodo{
    constructor(todo, date){
        this.todo = todo;
        this.date = date;
        this.id = Date.now();
        this.isComplete = false;
        this.postDate = new Date(this.id).toLocaleString();
    }
}

//let user enter there data
const userText = document.querySelector('.js-to-do-text');
const userDate = document.querySelector('.js-user-date')
const submitBtn = document.querySelector('.js-submit-btn');
const userDataOutput = document.querySelector('.js-user-data-output');

renderTodo();
attachListener();
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
        html += `<div class="js-todo" data-id="${data.id}">
        <p>Todo: ${data.todo}  Date: ${data.date} Postdate: ${data.postDate}</p>
        <button class="js-delete-btn btn btn2" data-id="${data.id}">Delete</button>
        <input class="js-checkbox" type="checkbox" data-id="${data.id}" ${data.isComplete ? 'checked':''}>
        </div>`
    })
    userDataOutput.innerHTML = html;
    localStorage.setItem('todoData', JSON.stringify(todoData));
}

function attachListener(){
    // Event Delegation
    userDataOutput.addEventListener('click',(event)=>{
            const targetedEvent = event.target;
            if(targetedEvent.classList.contains('js-delete-btn')){
            const deleteId = targetedEvent.dataset.id;
            todoData = todoData.filter((userTodo)=> userTodo.id != deleteId);
            renderTodo();
           }
           //TO-DO modify tododata base on checkBox
            else if(targetedEvent.classList.contains('js-checkbox')){
                const id = Number(targetedEvent.dataset.id);
                const foundtodo = todoData.find(todo=> todo.id === id);
                if(!foundtodo){
                    console.log('not found')
                    return;
                }
                if(foundtodo.isComplete){
                    foundtodo.isComplete = false;
                }else{
                    foundtodo.isComplete = true;
                }
                localStorage.setItem('todoData', JSON.stringify(todoData));
           }
        })
    }
  

