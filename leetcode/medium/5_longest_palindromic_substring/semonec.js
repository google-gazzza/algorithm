// https://leetcode.com/problems/longest-palindromic-substring/submissions/
// Runtime: 72 ms, faster than 92.88% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 36.6 MB, less than 63.04% of JavaScript online submissions for Longest Palindromic Substring.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // case 1. get all the result and find the best way
    //     let map = [...new Array(s.length)].map(_ => new Array(s.length).fill(0));
    //     let max = [0,0]; // start, end
       
    //     for (let len = 0; len < s.length; len++) {
    //         for (let i = 0; i < s.length; i++ ) {
    //             const j = i+len;
    //             let isPalindrome = s[i] === s[i+len] && (i+1 <= (j-1) ? map[i+1][j-1] : 1);
    //             if (isPalindrome) {
    //                 map[i][j] = 1;
    //                 if (max[1] - max[0] < j-i) {
    //                     max = [i, j];
    //                 }
    //             }
    //         }
    //     }
    //     return s.slice(max[0], max[1]+1)
        
        let getPlaindromeFrom = (s, left, right) => {
            if (s[left] !== s[right]) return "";
            
            while (left>= 0 && right < s.length) {
                if (s[left] !== s[right]) break;
                left--;
                right++;
            }
            return s.substring(left+1, right);
        }
        let result = "";
        for (let i = 0; i < s.length; i++) {
            const odd = getPlaindromeFrom(s, i,i);
            const even = getPlaindromeFrom(s, i, i+1);
            if (odd.length > result.length) result = odd;
            if (even.length > result.length) result = even;
        }
        return result;
    };