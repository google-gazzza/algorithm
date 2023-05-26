/*
leetcode/medium/64. Minimum Path Sum
64-minimum-path-sum
uRL: https://leetcode.com/problems/minimum-path-sum/description/

*/

package main

import "fmt"

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
func minPathSum(grid [][]int) int {
	lastRowLength := len(grid[len(grid)-1])
	lastRowIndex := len(grid) - 1

	for i := lastRowLength - 2; i >= 0; i-- {
		grid[lastRowIndex][i] += grid[lastRowIndex][i+1]
	}

	for rowIndex := lastRowIndex - 1; rowIndex >= 0; rowIndex-- {
		for columnIndex := len(grid[0]) - 1; columnIndex >= 0; columnIndex-- {
			if columnIndex == len(grid[0])-1 {
				grid[rowIndex][columnIndex] += grid[rowIndex+1][columnIndex]
			} else {
				grid[rowIndex][columnIndex] += min(grid[rowIndex+1][columnIndex], grid[rowIndex][columnIndex+1])
			}
		}
	}

	return grid[0][0]
}

func main() {
	grid := [][]int{{1, 3, 1}, {1, 5, 1}, {4, 2, 1}}
	fmt.Println(minPathSum(grid))
	//Output: 7

	grid = [][]int{{1, 2, 3}, {4, 5, 6}}
	fmt.Println(minPathSum(grid))
	//Output: 12
}
