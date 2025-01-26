//examine the document object//

// console.dir(document);

// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[7])
// //document.all[7].textContent='hello';
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);

//getElementById

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// //headerTitle.textContent='hi'
// //headerTitle.innerHTML='<h6>DOM</h6>'
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)
// //headerTitle.style.borderBottom='solid 3px #000';
// var mainheader=document.getElementById('main-header');
// mainheader.style.borderBottom='solid 3px #000'

//getElementsByClassName

// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[2])
// items[2].textContent='hello'
// items[2].style.backgroundColor='yellow'
// //items.style.backgroundColor='red'  //it will not work

// for(let i=0;i<items.length;i++)
//  {
//      items[i].style.backgroundColor='#f4f4f4';
//  }

 //getElementsByTagName

// var li=document.getElementsByTagName("li");
// console.log(li);
// console.log(li[2])
// li[2].textContent='hello'
// li[2].style.fontWeight='bold'



//querySelector - for single item

// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 4px #000'

// var input=document.querySelector('input')
// input.value='hello world'

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item=document.querySelector('.list-group-item')
// item.style.color='red'

// var lastitem=document.querySelector('.list-group-item:last-child')
// lastitem.style.color='green'

// var seconditem=document.querySelector('.list-group-item:nth-child(2)')
// seconditem.style.color='yellow'



//querySelectorAll

// var titles=document.querySelectorAll('.title')
// console.log(titles)
// console.log(titles[0].textContent="hello")

// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++)
//     odd[i].style.backgroundColor='yellow'

// var even=document.querySelectorAll('li:nth-child(even)')
// for(var i=0;i<even.length;i++)
//    even[i].style.backgroundColor='pink'


//TRVAERSING DOM

// var itemList=document.querySelector('#items');
// //parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='red'
// console.log(itemList.parentNode.parentNode)

//parentElement

// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='red'
// console.log(itemList.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes)

//children
// console.log(itemList.children)
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='pink'

//firstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello'


// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// //itemList.lastElementChild.textContent='hello'

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling)

//previousSibling
//console.log(itemList.previousSiblingSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling)

//createElement

//create a div
// var newDiv = document.createElement('div');
// //add class
// newDiv.className='hello'
// //add id
// newDiv.id='helloid';
// //add attr
// newDiv.setAttribute('title','dom')
// console.log(newDiv)

// //create text node
// var newDivText=document.createTextNode("hello world");
// newDiv.appendChild(newDivText);
// console.log(newDiv)
// newDiv.style.fontSize='30px'
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

// var btn=document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e)
// {
    // document.getElementById('header-title').textContent='changed';
    // document.querySelector('#main').style.backgroundColor='red';
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    //var output=document.getElementById('output')
    // output.innerHTML='<h3>'+e.target.id+'</h3';

    // console.log(e.type)
    // console.log(e.clientX)
    // console.log(e.clientY)

    // console.log(e.offsetX)
    // console.log(e.offsetY)
    // console.log(e.altKey)
    // console.log(e.shiftKey)
    // console.log(e.ctrlKey)
// }

// var btn=document.getElementById('button')
// // btn.addEventListener('click',runEvent);
// // btn.addEventListener('dblclick',runEvent);
// //  btn.addEventListener('mousedown',runEvent);
// //  btn.addEventListener('mouseup',runEvent);

// var output=document.getElementById('output')
// var itemInput=document.querySelector('input[type="text"]')
// var select=document.querySelector('select')
// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)
// // itemInput.addEventListener('focus',runEvent)
// // itemInput.addEventListener('blur',runEvent)
// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)
// itemInput.addEventListener('input',runEvent)

// select.addEventListener('change',runEvent)
// select.addEventListener('input',runEvent)


// var form=document.querySelector('form')
// form.addEventListener('submit',runEvent)
// function runEvent(e)
// {
//     e.preventDefault();
//     console.log("Event type: "+e.type);
//     output.innerHTML='<h3>'+e.target.value+' </h3>'
//     // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
//     // output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3> MouseY: '+e.offsetY+'</h3>'
// }

// var box=document.getElementById('box')
// box.addEventListener('mouseenter',runEvent)
// box.addEventListener('mouseleave',runEvent)
// box.addEventListener('mouseover',runEvent)
// box.addEventListener('mouseout',runEvent)
// box.addEventListener('mousemove',runEvent)




// MAIN PROJECT

var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem)

//Delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

//Add Item
function addItem(e){
    e.preventDefault();

    //Get Input Value
    var newItem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    console.log(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
   // itemList.appendChild(li);

    //create del button element
    var deleteBtn = document.createElement('button');
    // add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to li
    li.appendChild(deleteBtn)
    //Append li to list
    itemList.appendChild(li);

}

//remove item

function removeItem(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("Are u sure to delete ??"))
        {
          var li=e.target.parentElement;
          itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    e.preventDefault();
    //convert every letter into lowercase
    var text=e.target.value.toLowerCase();
    //get list elements
    var  items=itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}