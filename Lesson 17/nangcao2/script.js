function isPalindrome(s) {
    if (s.length <= 1) {
        return true;
    }

    let firstChar = s[0];
    let lastChar = s[s.length - 1];

    if (firstChar === lastChar) {
        let subString = s.substring(1, s.length - 1);        
        console.log("Is palindrome ");
        return isPalindrome(subString);
    } else {
        console.log("Not a palindrome");
        return false;
    }
}

console.log(isPalindrome("rotor")); 
console.log(isPalindrome("redder")); 
console.log(isPalindrome("motor"));  