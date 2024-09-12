// https://leetcode.com/problems/valid-sudoku/submissions/
// Runtime: 72 ms, faster than 84.85% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 37.7 MB, less than 93.33% of JavaScript online submissions for Valid Sudoku.
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {    
    for (let i = 0; i < 9; i++) {   
        let row = {};
        let col = {};
        let subbox = {};
        for (let j = 0; j < 9; j++) {
            const _row = board[i][j];
            const _col = board[j][i];
            
            if (_row !== '.') {
                if (row[_row]) return false;
                row[_row] = true;
            }
            if (_col !== '.') {
                if (col[_col]) return false;
                col[_col] = true;
            }
            let r = (3*Math.floor(i/3) + Math.floor(j/3));
            let c = (3*Math.floor(i%3) + Math.floor(j%3));
            const _subBox = board[r][c];
 
            if (_subBox !== '.') {
                if (subbox[_subBox]) return false;
                subbox[_subBox] = true;
            }
        }
    }
    return true;
};
