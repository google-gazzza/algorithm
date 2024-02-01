Runtime: 48 ms, faster than 92.59% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 33.8 MB, less than 92.31% of JavaScript online submissions for Pascal's Triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
            var result = Array(numRows).fill(null).map(() => Array());
            if (numRows <= 0)
                return result;
            for (var i = 0; i < numRows; i++) {

                result[i][0] = 1;
                for (var j = 1; j <= i; j++) {
                    if (j === i) {
                        result[i][j] = 1;
                    } else {
                        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
                    }
                }
            }
            return result;
        };
