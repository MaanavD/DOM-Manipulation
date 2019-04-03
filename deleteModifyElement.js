//Replace Elements

const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List New'));

const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading,oldHeading);

//Removing elements

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();

list.removeChild(lis[2]);

//Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
//remove works too.
val = link;

val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');
link.setAttribute('title','Google')
val = link.hasAttribute('title');

console.log(val);
