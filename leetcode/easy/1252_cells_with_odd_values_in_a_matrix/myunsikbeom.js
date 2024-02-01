/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
//Runtime: 56 ms, faster than 81.01% of JavaScript online submissions for Cells with Odd Values in a Matrix.
//Memory Usage: 35.8 MB, less than 100.00% of JavaScript online submissions for Cells with Odd Values in a Matrix.
var oddCells = function(n, m, indices) {
    let matrix = [];
    for(let i=0;i<n;i++){
        let arr = [];
        for(let j=0;j<m;j++){
            arr.push(0);
        }
        matrix.push(arr);
    }
    let result = 0;
    indices.forEach(el =>{
        let ri = el[0],ci = el[1];
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(i===ri){
                    matrix[i][j]++;
                }
                if(j===ci){
                   matrix[i][j]++;
               }
            }
        }
    });
   
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            result += (matrix[i][j] %2 === 1 ? 1 : 0);
        }
    }
    return result;
};
