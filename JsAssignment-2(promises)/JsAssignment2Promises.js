console.log("Assignment2 ");

//question statement 
// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");

// How do you solve this problem. How can we wait for till the function execution is
 //completed, so that we can have correct email at line 10?
//-------------------------------------------------------------------------------

// function getData(uId) {
//         return new Promise(function(resolve){
//              setTimeout(() => {
//             console.log("Fetched the data!");
//             resolve("skc@gmail.com");
//             }, 1000);
//     })
    
//     }
    
//     async function myfunction(){
//         console.log("start");
//         var email = await getData("skc");
//         console.log("Email id of the user id is: " + email);
//         console.log("end");
//     }

//     myfunction();

//-----------------------------------------------------------------------------------
//just for practice 
//     function getData(uId,callback) {

//             setTimeout(() => {
//                     console.log("Fetched the data!");
//                    // return "skc@gmail.com";
//                    var id="skc@gmail.com";
//                   callback(id);
//             }, 4000);
//     }

//    function print(id)
//    {
//     console.log("start");
//     console.log("Email id of the user id is: " + id);
//     console.log("end");
//    }
//    getData("skc",print)
 
   