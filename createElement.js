const li = document.createElement('li');

//Adding a class
li.className = 'collection-item';
//Adding an ID
li.id = 'new-id';
//Adding any attribute
li.setAttribute('title','new-Attribute');

li.appendChild(document.createTextNode('hello world'));


//Create new link element
// const link = document.createElement('a');
// link.className = "delete-item secondary-content";
// link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link as child of li
// li.appendChild(link);


//OR, add innerHTML with eventual template string:
li.innerHTML = 'Hello World <a href="#" class="delete-item secondary-content"> <i class="fa fa-remove"></i> </a>'


//Append an li as child to a ul

document.querySelector('ul.collection').appendChild(li);
console.log(li);
