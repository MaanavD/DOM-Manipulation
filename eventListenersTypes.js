const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

taskInput.value = '';

// form.addEventListener('submit', runEvent);

//keydown keypress exists too!
// taskInput.addEventListener('keyup',runEvent);

//Focus is on click in
// taskInput.addEventListener('focus',runEvent);

//Blur is on click in then out
// taskInput.addEventListener('blur',runEvent);
//cut, paste, copy also work
//input works on cut paste copy or anything else.
//change works for select boxes or radio buttons.


function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)
    
    // console.log(e.target.value);
    heading.innerText = e.target.value;

    //get input value
    // console.log(taskInput.value);
    // taskInput.value = '';
    // e.preventDefault();
}