//Exercise 3 : Is palindrome?
function isPalindrome(ch) {
    ch = ch.toLowerCase().replace(/[^a-z0-9]/g, "");  //convert to lowerCase + remove non-alphanumeric characters
    return ch === ch.split("").reverse().join("");
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("noun nour"));








