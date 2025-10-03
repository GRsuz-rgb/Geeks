//Exercise 3 : Analyze #5


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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)


////after 5s it logs:   ==PARALLEL with await Promise.all==
//and runs the   await promis.all => starting slow promise  
//                                   starting fast promise
//after 1s : fast promise is done   and immediately prints   fast 
//=> after 2s :  slow promise is done    and prints    slow .






//output:
//==PARALLEL with await Promise.all==
//starting slow promise
//starting fast promise
//fast promise is done
//fast
//slow promise is done
//slow


