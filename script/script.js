//to-list app

const todoData = [];

//let user enter there data
const userInput = document.querySelector('.js-to-do-text');
const submitBtn = document.querySelector('.js-submit-btn');
//get the data and store it
submitBtn.addEventListener('click',()=>{
    todoData.push(userInput.value);
    console.log(todoData)
})

