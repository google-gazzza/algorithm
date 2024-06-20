// 3189-minimum-moves-to-get-a peaceful-board
// URL: https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/description/


class Solution {
    fun isEmptyRow(matrix: Array<IntArray>, row: Int): Boolean {
        for (i in matrix[row]) {
            if (i == 1) {
                return false
            }
        }

        return true
    }

    fun isEmptyColumn(matrix: Array<IntArray>, column: Int): Boolean {
        for (i in matrix) {
            if (i[column] == 1) {
                return false
            }
        }

        return true
    }

    fun minMoves(rooks: Array<IntArray>): Int {
        // sort by column[0] and [1
        rooks.sortWith(compareBy({ it[0] }, { it[1] }))

        // define matrix m*m based on input length
        val m = rooks.size
        val matrix = Array(m) { IntArray(m) }

        // input all rooks into matrix as 1
        for (rook in rooks) {
            matrix[rook[0]][rook[1]] = 1
        }

        // distribute rook to each row
        // step1 iterate row, if sum of row is not 1
        // iterate that row [0 to n] if column of sum is 0, then move rook to that column and empty row
        var moves = 0
        // iterate row
        for (rowIndex in 0 until m) {
            var sum = matrix[rowIndex].sum()

            if (sum > 1) {
                // searching each column of row
                for (columnIndex in 0 until m) {
                    if (matrix[rowIndex][columnIndex] == 1) {
                        // searching empty row
                        for (newRowIndex in 0 until m) {
                            if (isEmptyRow(matrix, newRowIndex)) {
                                matrix[newRowIndex][columnIndex] = 1
                                matrix[rowIndex][columnIndex] = 0
                                moves += Math.abs(newRowIndex - rowIndex) + Math.abs(columnIndex - columnIndex)
                                sum--
                                break;
                            }

                        }
                    }
                    if (sum == 1) {
                        break
                    }
                }
            }
        }

        for (columnIndex in 0 until m) {
            var sum = 0
            for (rowIndex in 0 until m) {
                sum += matrix[rowIndex][columnIndex]
            }
            if (sum > 1) {
                for (rowIndex in 0 until m) {
                    if (matrix[rowIndex][columnIndex] == 1) {
                        for (newColumnIndex in 0 until m) {
                            if (isEmptyColumn(matrix, newColumnIndex)) {
                                matrix[rowIndex][newColumnIndex] = 1
                                matrix[rowIndex][columnIndex] = 0
                                moves += Math.abs(rowIndex - rowIndex) + Math.abs(newColumnIndex - columnIndex)
                                sum--
                                break;
                            }
                        }
                    }
                    if (sum == 1) {
                        break
                    }
                }
            }
        }

        return moves
    }
}
