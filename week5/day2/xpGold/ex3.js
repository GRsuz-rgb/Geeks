//Exercise 3 : Analyze #3


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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)


//after 4 seconds concurrentStart() runs => ==CONCURRENT START with await== is logged, it call resolveAfter2Seonds() => logs "starting slow promise"  waiting 2seconds  and resolveAfter1Second() is called => logs "starting fast promise" and timer of 1second starts running
//two promises strat at the same time because we call them before await
//after 1 second => "fast promise is done".
//after 2 seconds => "slow promise is done" and promise resolves with "slow".
//await fast finishes (but it was already resolved earlier) => logs "fast".
//fast finishes first, but the code is still await slow => so it waits for slow first

//output:
//==CONCURRENT START with await==
//starting slow promise
//starting fast promise
//fast promise is done
//slow promise is done
//slow
//fast
