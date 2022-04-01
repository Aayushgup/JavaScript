console.log("Promise ");



function func1() {
    return new Promise(function (resolve,reject) {
        setTimeout(function() {
            const error = true;
            if (error) {
                console.log('Function: Your promise has been resolved')
                 resolve('fulfilled');                                                                                     
            }
            else {
                console.log('Function: Your promise has not been resolved')
               reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(value){
    console.log(" Thanks for resolving :"+value)
}
).catch(function(error){
    console.log("Reason : "+error);
})
