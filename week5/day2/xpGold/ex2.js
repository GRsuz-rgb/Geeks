//Exercise 2 : Analyze #2

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
}; 
//apres l'appel de resolveAfter2Seconds() 

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()

//the two functions are called one after one because of await .resolveAfter2Seconds() is the first executed, it takes 2seconds . After resolveAfter1Second() runs and it takes only 1second 

//=> output :
//==SEQUENTIAL START==
//starting slow promise
//slow promise is done
//slow
//starting fast promise
//fast promise is done
//fast















