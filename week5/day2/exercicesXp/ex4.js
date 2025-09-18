//Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//asyncCall() starts running. It prints "calling". It calls resolveAfter2Seconds(), which returns a promise that resolves after 2 seconds with the string "resolved".
//the await pauses the execution until the promise resolves. After 2 seconds, "resolved" is printed. 


//=> output :   calling
   //           resolved






























