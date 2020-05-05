// https://leetcode.com/problems/pascals-triangle/submissions/
// Runtime: 52 ms, faster than 72.41% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 33.9 MB, less than 23.08% of JavaScript online submissions for Pascal's Triangle.
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    
    let getTriangle = (arr, currLevel, numRows) => {
        if (currLevel > numRows)
            return arr;
        let left = 0;
        let right = currLevel -1;
        const prevLevel = arr[currLevel -2];
        let currArr = [];
        for (let i = 0; i < currLevel; i++) {
            
            currArr[i] = (prevLevel[i-1] || 0) + (prevLevel[i] || 0);
        }
        arr.push(currArr);
        return getTriangle(arr, currLevel + 1, numRows);
    }
    return getTriangle([[1]], 2 , numRows );
};