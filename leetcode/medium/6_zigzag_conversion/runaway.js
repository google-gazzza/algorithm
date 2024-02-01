// https://leetcode.com/problems/zigzag-conversion/
// Runtime: 88 ms, faster than 74.61% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 39.1 MB, less than 72.22% of JavaScript online submissions for ZigZag Conversion.

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const n = numRows * 2 - 2;
    if (n < 1)
        return s;
    
    let chars = [];
    for (let y = 0; y < numRows; y++) {
        const isFirstOrLast = y === 0 || y === numRows - 1;
        let [i1, i2, b1, b2] = [y, n-y, true, !isFirstOrLast];
        
        while (b1 || b2) {
            if (b1) {
                chars.push(s[i1]);
                i1 += n;
                b1 = i1 < s.length;
            }
            if (b2) {
                chars.push(s[i2]);
                i2 += n;
                b2 = i2 < s.length;
            }
        }
    }
    return chars.join('');
};