//Exercise 2 : Analyse Promise.all()

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync); //calls the function for each element in  arr => promiseArr = [Promise(2), Promise(4), Promise(6)]

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  }); //waits until all promises resolve 
      // ==> output : [2, 4, 6]  

