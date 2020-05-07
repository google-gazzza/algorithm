// https://leetcode.com/problems/reverse-string/submissions/
// Runtime: 96 ms, faster than 99.44% of JavaScript online submissions for Reverse String.
// Memory Usage: 46.7 MB, less than 68.89% of JavaScript online submissions for Reverse String.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let head = 0;
    let tail = s.length -1;
    while (head < tail) {
        const tmp = s[head];
        s[head] = s[tail];
        s[tail] = tmp;
        head++;
        tail--;
    }
};