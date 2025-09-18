//Exercise 1 : Promise.all()

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.log(error));



//Explain in a comment how Promise.all work and why you receive this output.
   //=> Promise.all([...]) takes an array of promises (or values)
    // It waits until all promises are resolved
    // If all resolve , it returns a single promise that resolves into an array of results    
    // If any promise rejects, the whole promise.all immediatly rejects with that error















