//1. 
let sentence = ['The movie is not that bad, I like it'];
//2. 
let wordNot = sentence.indexOf('not');
//3. 
let wordBad = sentence.indexOf('bad');
//4.  + 5.
if(wordBad > wordNot && wordNot !== -1 && wordBad !== -1 ){
    let new_s = sentence.slice(0, wordNot) + 'good' + sentence.slice(wordBad, 3);
    console.log(new_s);
}
else{
    console.log(sentence);
}


