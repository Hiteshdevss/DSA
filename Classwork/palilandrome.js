function isPalindrome(s) {
    var l = 0;
    var r = s.length - 1;
    var chars = s.split(''); // Convert string to array of characters
    while (l < r) {
        if (chars[l] !== chars[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
console.log(isPalindrome("Hitesh"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Malayalam"));
