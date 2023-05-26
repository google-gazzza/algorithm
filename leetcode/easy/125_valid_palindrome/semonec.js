// https://leetcode.com/problems/valid-palindrome/submissions/
// Runtime: 68 ms, faster than 81.54% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 42.1 MB, less than 8.70% of JavaScript online submissions for Valid Palindrome.
/**
 * @param {string} s
 * @return {boolean}
 */

let isAlphaNum = (c) => {
    return /^[A-Za-z0-9]/.test(c)
}

var isPalindrome = function(s) {
    let arr = s.split('');
    let left = 0;
    let right = arr.length -1;
    while (left < right) {
        if (!isAlphaNum(arr[left])) {
            left++;
            continue;
        }
        if (!isAlphaNum(arr[right])) {
            right--;
            continue;
        }
        if (arr[left].toLowerCase() !== arr[right].toLowerCase())
            return false;
        left++;
        right--;
    }
    return true;
};