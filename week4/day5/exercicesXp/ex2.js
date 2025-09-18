// Exercise 2 : Promises
//1. Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

promise.then(result => console.log(result));