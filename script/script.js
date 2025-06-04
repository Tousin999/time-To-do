//to-list app

const todoData = [];
class UserTodo{
    constructor(todo, date){
        this.todo = todo;
        this.date = date;
    }
}

//let user enter there data
const userInput = document.querySelector('.js-to-do-text');
const userDate = document.querySelector('.js-user-date')
const submitBtn = document.querySelector('.js-submit-btn');
//get the data and store it
submitBtn.addEventListener('click',()=>{
    /* const userData = {
        todo: userInput.value,
        date: userSetDate.value
    } */
   const userData = new UserTodo(userInput.value, userDate.value);

    todoData.push(userData);
    console.log(todoData)
})

