//DOM Selectors, which replaces JQuery

//Same as styling via css
document.getElementById('task-title').style.background = '#fff'

//Change content
document.getElementById('task-title').textContent = "Task List";
document.getElementById('task-title').innerText = "Task List";
document.getElementById('task-title').innerHTML =
  '<span style="color:red">Task List</span>';
//QuerySelector > Better than id, and replaces jQuery
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('h5'));
// console.log(document.querySelector('.card-title'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(4)').style.color = 'blue';

//Documents > multiple elements
const items = document.getElementsByClassName('collection-item')
//HTML Collections work much like arrays

items[2].textContent = "didThisWork?";
//These only get items under a ul, as opposed to all elements with the collection-item class
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

//document.getElementsByTagName
const lis = document.getElementsByTagName('li');
//Converting HTML Collection into an array for functions:
lis2 = Array.from(lis);
lis2.reverse();
lis2.forEach(function (li, index) {
  console.log(li.className);
  li.textContent=`${index}`
});

//document.querySeelctorAll works too, and allows you to make a node list from it.


/*Tl;dr, can select item or items via multiple ways.
This lets you segment the items you select
*/
console.log(lis);
console.log(items[0]);