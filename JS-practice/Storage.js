console.log('local and Seesion Storage');

let arr = ['Aayush', 'Javascript', 'Zemoso'];

// Adding a key-value pair inside local Storage
localStorage.setItem(11, 1);
localStorage.setItem('Name2', 'Kasaudhan');
localStorage.setItem('Details', JSON.stringify(arr));



// localStorage.clear();

// removing a particular key value pair.
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage

let name = localStorage.getItem('Name');

names = JSON.parse(localStorage.getItem('Details'));
console.log(names)

sessionStorage.setItem('sessionName', 'Ayush');
sessionStorage.setItem('sessionName2', 'kasaudhan');
sessionStorage.setItem('sessionDetails', JSON.stringify(arr));
