// Set local and session storage items
//local will stay upon broswer reset
localStorage.setItem('name', 'Maanav');
//session will go upon browser reset
sessionStorage.setItem('name','Maanav');

//getting from storage
const name = localStorage.getItem('name');
// console.log(name);

//clearing from storage:
// localStorage.clear();

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    

    e.preventDefault;
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
});