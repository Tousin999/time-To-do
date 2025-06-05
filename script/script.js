//to-list app

const todoData = [];
class UserTodo{
    constructor(todo, date){
        this.todo = todo;
        this.date = date;
    }
}

//let user enter there data
const userText = document.querySelector('.js-to-do-text');
const userDate = document.querySelector('.js-user-date')
const submitBtn = document.querySelector('.js-submit-btn');
const userDataOutput = document.querySelector('.js-user-data-output');
//get the data and store it
submitBtn.addEventListener('click',()=>{
   const userTodo = new UserTodo(userText.value, userDate.value);
    todoData.push(userTodo);
    let html = ''
    todoData.forEach((data)=>{
        html += `<p>Todo: ${data.todo}, Date: ${data.date}</p>`
    })
    userDataOutput.innerHTML = html;
})

