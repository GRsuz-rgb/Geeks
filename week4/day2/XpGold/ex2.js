//Exercise 2: Analyzing the reduce method

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

//acc est initialise par [1,2]
//cur = [0,1]
//acc.concat(cur) => [1,2].concat([0,1]) => [1,2,0,1]
//cur = [2,3]
//acc.concat(cur) => [1,2,0,1].concat([2,3])
//==>the output will be [1,2,0,1,2,3]
