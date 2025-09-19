//Exercise 2 : Grade Average

//1. calculate average
function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  return sum / gradesList.length;
}

// check pass/fail
function findAvg(gradesList) {
  let average = calculateAverage(gradesList);
  console.log("Average:", average);

  if (average > 65) {
    console.log("Congratulations! You passed.");
  } else {
    console.log("Sorry, you failed. You must repeat the course.");
  }
}

// test exp:
let grades = [70, 80, 60, 90, 50];
findAvg(grades);
































