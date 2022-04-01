console.log('Welcome to javascrip dom');   
let a= document;
console.log(a);
a = document.body;
// a = document.forms[0];
//a=document.forms;
console.log(a);

a = document.links;
// 
Array.from(a).forEach(function(element){
    console.log(element);
}) 
a= document.scripts;
//a= document.images;
console.log(a);



//finding link which have desired text in that.

// 
b=document.links;
Array.from(b).forEach(function(element){
    if (String(element).includes('c++'))
    console.log(element);
})