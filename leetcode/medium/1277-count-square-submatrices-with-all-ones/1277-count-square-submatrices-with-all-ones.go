/*
1277-count-square-submatrices-with-all-ones
leetcode/medium/1277. Count Square Submatrices with All Ones
URL: https://leetcode.com/problems/count-square-submatrices-with-all-ones/

NOTE: Explanation
*/

package main

import "fmt"

func expandCounting(matrix [][]int, i int, j int, extendSize int, count *int) {
	if i+extendSize < len(matrix) && j+extendSize < len(matrix[i]) &&
		matrix[i+extendSize][j+extendSize] == 1 {

		for k := 0; k < extendSize; k++ {
			if matrix[i+extendSize][j+k] == 0 || matrix[i+k][j+extendSize] == 0 {
				return
			}
		}

		*count++
		expandCounting(matrix, i, j, extendSize+1, count)
	}
}

func countSquares(matrix [][]int) int {
	count := 0

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == 1 {
				count++
				expandCounting(matrix, i, j, 1, &count)
			}
		}
	}

	return count
}

func main() {
	matrix := [][]int{
		{0, 1, 1, 1},
		{1, 1, 1, 1},
		{0, 1, 1, 1},
	}
	fmt.Println(countSquares(matrix))
	//Output: 15

	matrix = [][]int{
		{1, 0, 1},
		{1, 1, 0},
		{1, 1, 0},
	}
	fmt.Println(countSquares(matrix))
	//Output: 7
}
