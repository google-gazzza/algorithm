// https://leetcode.com/problems/pascals-triangle/
// Runtime: 48 ms, faster than 92.11% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 34.3 MB, less than 7.69% of JavaScript online submissions for Pascal's Triangle.
/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    if(numRows===0){
        return [];
    }
    let numbers = Array(numRows).fill(null).map(() => []);
    numbers[0][0]=1;

    let getNum=function(row,col){
        if(numbers[row][col]!=undefined){
            return numbers[row][col];
        }
        if(col===0 ||row===col){
            numbers[row][col]=1;
            return 1;
        }

        let left=numbers[row-1][col-1];
        let right=numbers[row-1][col]

        if(left===undefined){
            left=getNum(row-1,col-1)
            numbers[row-1][col-1]=left;
        }
        if(right===undefined){
            right=getNum(row-1,col)
            numbers[row-1][col]=right;
        }        
        return left+right;
    }

    let lastRow = numRows-1;
    for(let i=0; i<numRows; i++){
        numbers[lastRow][i]=(getNum(lastRow, i));
    }

    return numbers;
};