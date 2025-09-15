//Exercise 1 : Analyzing the map method
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
//[1,2,3] is an array of numbers then the map method will return a new array with each number multiplied by 2.  
//=> output : [2,4,6] 