////Event Bubbling
// document.querySelector('.card-title').addEventListener('click',runEvent);

// function runEvent(e){
//     console.log('card title');
// }

//Basically, a click on card title also counts as a click on:
//.card-content, .card, .col, .row, .contianer

////Event Delegation
//this is so that you don't just select the first one/
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log(e.target.parentElement);
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item successful');
        e.target.parentElement.parentElement.remove();
        //If hooked up to a database, obviously we would remove from database!
    }
}