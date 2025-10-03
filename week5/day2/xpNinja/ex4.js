//Exercise 4 : Analyze #6


let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)



//after 13s it logs:   ==PARALLEL with Promise.then==
//and logs : starting slow promise  
//           starting fast promise
//after 1s : fast promise is done      fast 
//=> after 2s :  slow promise is done       slow .
//no waiting for both


//output:
//==PARALLEL with Promise.then==
//starting slow promise
//starting fast promise
//fast promise is done
//fast
//slow promise is done
//slow