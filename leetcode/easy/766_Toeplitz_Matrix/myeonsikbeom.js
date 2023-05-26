/**
 * @param {number[][]} matrix
 * @return {boolean}
 Runtime: 106 ms, faster than 62.03% of JavaScript online submissions for Toeplitz Matrix.
Memory Usage: 43.8 MB, less than 86.84% of JavaScript online submissions for Toeplitz Matrix.
 */
var isToeplitzMatrix = function(matrix) {
    const xLen = matrix.length;
    const yLen = matrix[0].length;
    for(let i=0;i<xLen-1;i++){
        for(let j=0;j<yLen-1;j++){
            if(matrix[i][j] !== matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true;
};