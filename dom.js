console.log(document);
console.log(document.domain);
console.log(document.url);
headertitle.innerHTML = "<h3>Hello</h3>
var items = document.getElementClassName('list-group-item');
console.log(items);
console.log(items[i]);
items.style.foreweight = "bold";
items.style.backgroundcolour = "green";

var titles = document.querySelectorAll
var odd = document.query.SelectorAll('li:html.child(odd)');
var even = document.query.SelectorAll('li:html.child(even)');
for (var i = 0 ; i < add.length ; i++)
{
  odd[i].Style.backgroundcolour = 'green';
  
  even[i].Style.backgroundcolour = 'invisible';
}


//traversing DOM

var itemlist = document.querySelector("items");
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundcolour = "#f4f4f4";
console.log(itemlist.parentNode.parentnode.parentnode);

//Parent Element
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundcolour = "#f4f4f4";
console.log(itemlist.parentElement.parentElement.parentElement);

//Child Nodes

console.log(itemlist.child.Node);
console.log(itemlist.children);
console.log(itemlist.children[1]);

itemlist.children[1].style.backgroundcolour = "Yellow";

//First Child
Console.log(itemlist.firstchild);
//firstelementchild
console.log(itemlist.firstChild);
itemlist.firstElementChild.textcontent = 'Hello';

//next sibling
Console.log(itemlist.nextSibling);

//next Element sibling
Console.log(itemlist.nextElementSibling);

//Previous sibling
Console.log(itemlist.previousSibling);
Console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.colour = "Green"

//Create Element

bar newDiv = document.createElement('div');
newDiv.className = "Hello" //add class
newDiv.id = 'hello'; //add id
newDiv.setAttribute('title',"hello Dev");

//create text Node
var newDevText = document.createTextNode("Hello world");

//Add text to dev
newDiv.appendchild(newDevText);
var Container = document.queryselector('header.container);
var h1 = document.querySelector("header h1");
console.log(newDiv)
newDiv.style.fontsize = '30px';
container.insertBefore(newDiv,n);



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


