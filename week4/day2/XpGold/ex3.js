//Exercise 3 : Analyze this code


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

//the value of i is : 0,1,2,3,4,5 because its the index of arrayNum

