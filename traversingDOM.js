//Traversing the DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;
 
//Traverse Downwards!
val = list.childNodes;
//^This includes line breaks
val = list.children;

val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

list.children[1].textContent = 'Hello';
//Can also do children of children
//First child
val = list.firstChild;
//First actual child
//Can do, for example, if this first element is reminder, add to reminders
val = list.firstElementChild;

//Traverse upwards!
val = list.parentElement;
val = list.parentNode;

//Traverse Sideways!
val = listItem.nextElementSibling;
val = listItem.nextSibling;
//previous siblings exist also.


console.log(val);