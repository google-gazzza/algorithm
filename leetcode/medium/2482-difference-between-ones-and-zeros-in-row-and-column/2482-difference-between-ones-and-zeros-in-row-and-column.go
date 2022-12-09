/*
2482-difference-between-ones-and-zeros-in-row-and-column
leetcode/medium/2482. Difference Between Ones and Zeros in Row and Column
URL: https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/description/

NOTE: Explanation
*/

package main

import "fmt"

func onesMinusZeros(grid [][]int) [][]int {
	diff := make([][]int, len(grid))

	for i := 0; i < len(grid); i++ {
		diff[i] = make([]int, len(grid[0]))
		rowSum := 0

		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == 1 {
				rowSum++
			} else {
				rowSum--
			}

		}

		for j := 0; j < len(grid[0]); j++ {
			diff[i][j] += rowSum
		}
	}

	for i := 0; i < len(grid[0]); i++ {
		colSum := 0

		for j := 0; j < len(grid); j++ {
			if grid[j][i] == 1 {
				colSum++
			} else {
				colSum--
			}
		}

		for j := 0; j < len(grid); j++ {
			diff[j][i] += colSum
		}
	}

	return diff
}

func main() {
	grid := [][]int{{0, 1, 1}, {1, 0, 1}, {0, 0, 1}}
	fmt.Println(onesMinusZeros(grid))
	//Output: [[0,0,4],[0,0,4],[-2,-2,2]]

	grid = [][]int{{1, 1, 1}, {1, 1, 1}}
	fmt.Println(onesMinusZeros(grid))
	//Output: [[5,5,5],[5,5,5]]
}
