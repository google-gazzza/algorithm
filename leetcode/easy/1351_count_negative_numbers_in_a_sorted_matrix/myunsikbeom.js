/**
 * @param {number[][]} grid
 * @return {number}
 */
//Runtime: 60 ms, faster than 50.89% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
//Memory Usage: 35.8 MB, less than 100.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
var countNegatives = function(grid) {
    let result = 0;
    
    grid.forEach((row) => {
        row.forEach((num) => { if(num < 0){result++}})
    })
        return result;
};
