console.log("Callback practice");


 var students = [
    {name: "Aayush", subject: "JavaScript"},
    {name: "Aman", subject: "Machine Learning"}
]
console.log(typeof students);


function enrollStudent(student,callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
       // callback();
    }, 2000);
}

function getStudents(){
    setTimeout(function() {
        students.forEach(function(student){
            console.log(student.name);
        }); 
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name:"Rohan", subject:"Python"}
enrollStudent(newStudent,getStudents);
getStudents();

