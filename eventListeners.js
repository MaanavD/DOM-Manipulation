document.querySelector('.clear-tasks').addEventListener('click',
function(e){
    console.log('Hello World');
    // Prevent default form / button behaviour
    e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){

    //event target element
    val = e.target;
    val = e.target.className;
    val = e.target.classList[1];
    e.target.innerText = 'hello';
    e.target.style.color = 'red';

    val = e.type;
    val = e.timeStamp;
    //Coord event relative to window
    val = e.clientY;

    //Coord event relative to object
    val = e.offsetY;
    console.log(val);
}