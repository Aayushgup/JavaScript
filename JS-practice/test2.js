console.log("Dom Element selector")

// 1. Single element selector ------------------------------------

// let element = document.getElementById('myfirst');
// console.log(element);
//  element = element.className;
//  console.log(element);
// element = element.childNodes;
// element = element.parentNode;
// console.log(element);

// element.style.color = 'red';
// element.innerText = 'This is Aayush';
//  console.log(element.innerText);


// let sel = document.querySelector('#myfirst');
//sel = document.querySelector('.child');
//  sel = document.querySelector('div');
//  sel.style.color = 'green';
 //console.log(sel)

// // 2. Multi element selector ------------------------------------------


 //let elems = document.getElementsByClassName('child');
  //elems = document.getElementsByClassName('container');
 //elems = document.getElementsByTagName('div');
 //elems[0].style.color='red '
//console.log(elems)

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }

//------//

 let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
//  console.log(cont.childNodes);
//  console.log(cont.children);
//  let nodeName = cont.childNodes[0].nodeName;
//  let nodeType = cont.childNodes[0].nodeType;
//  console.log(cont.childNodes.length);
//  console.log(nodeName)
//  console.log(nodeType)

// Node types 
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType


// let container = document.querySelector('div.container');

// console.log(container.children[1].children[0]);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

//-------------//creation and insertion 

//  console.log('for creation and removal');
//  let element = document.createElement('li');
// let text = document.createTextNode('I am a text node which is created by js');
//  element.appendChild(text)
//  console.log(element);

//  let getEle = document.querySelector('.child');
// getEle.appendChild(element);

// giving class name
// element.className = 'child';
// element.id = 'createdLi';
// element.setAttribute('title', 'mytitle');
// console.log(element)



// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('This is a created node for elem2');
// elem2.appendChild(tnode);

// element.replaceWith(elem2); 
// console.log(element)

