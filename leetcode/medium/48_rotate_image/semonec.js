// https://leetcode.com/problems/rotate-image/submissions/
// Runtime: 48 ms, faster than 95.66% of JavaScript online submissions for Rotate Image.
// Memory Usage: 33.7 MB, less than 94.74% of JavaScript online submissions for Rotate Image.
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0, right = matrix.length -1;
    while (left < right) {
        const l = matrix[left];
        matrix[left] = matrix[right];
        matrix[right] = l;
        left ++;
        right--;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            if (i === j) continue;
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    
    return matrix;
};
