// Write your code below
function isPalindrome(str) {
    const strArr = str.split('');   //turn the string into a character array
    const rvsStrArr = Array.from(strArr);  //make a shallow copy of the original array
    rvsStrArr.reverse();
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] !== rvsStrArr[i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("helllo"));
