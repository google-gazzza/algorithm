/*
2128-remove-all-ones-with-row-and-column-flips
leetcode/easy/2128. Remove All Ones With Row and Column Flips
Difficulty: medium
URL: https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/
*/

package main

import "fmt"

func removeOnes(grid [][]int) bool {

	inverseColumn := func(columnIndex int) {
		for i := 0; i < len(grid); i++ {
			grid[i][columnIndex] = grid[i][columnIndex] ^ 1
		}
	}

	inverseRow := func(rowIndex int) {
		for i := 0; i < len(grid[rowIndex]); i++ {
			grid[rowIndex][i] = grid[rowIndex][i] ^ 1
		}
	}

	isAllRowOnes := func(rowIndex int) bool {
		isTrue := true

		for i := 0; i < len(grid[rowIndex]); i++ {
			if grid[rowIndex][i] == 0 {
				isTrue = false
				break
			}
		}

		return isTrue
	}

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if isAllRowOnes(i) {
				inverseRow(i)
			}
			if grid[i][j] == 1 {
				inverseColumn(j)
			}
		}
	}

	result := true

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == 1 {
				result = false
				break
			}
		}
	}

	return result
}

func main() {
	grid := [][]int{{0, 1, 0}, {1, 0, 1}, {0, 1, 0}}
	//Output: true
	fmt.Println("%v", removeOnes(grid))

	grid = [][]int{{1, 1, 0}, {0, 0, 0}, {0, 0, 0}}
	//Output: false
	fmt.Println("%v", removeOnes(grid))

	grid = [][]int{{0}}
	fmt.Println("%v", removeOnes(grid))
}
