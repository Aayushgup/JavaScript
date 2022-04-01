//Q1
function fun1(){
    console.log("Aayush");
    return 5;
}
console.log(fun1());

function fun2(fun1){
    let a=fun1();
    console.log(a+5);
}
fun2(fun1);

// Q2
let arrowFun =(firstName,lastName)=>
{
    return firstName.charAt(0)+lastName.charAt(0);

}

console.log(arrowFun('Aayush','kasaudhan'));