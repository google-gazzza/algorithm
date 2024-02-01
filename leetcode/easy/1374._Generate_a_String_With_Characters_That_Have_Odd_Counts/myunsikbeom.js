/**
 * @param {number} n
 * @return {string}
 */
//Runtime: 48 ms, faster than 94.04% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
//Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
var generateTheString = function(n) {
    
    let result = "";
    for(let i=0;i<n;i++){
        result += 'a';
    }
    return (n %2 === 0) ? result.replace('a','b') : result;
};
