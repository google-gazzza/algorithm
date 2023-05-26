/*
2428-maximum-sum-of-an-hourglass
leetcode/medium/2428. Maximum Sum of an Hourglass
URL: https://leetcode.com/problems/maximum-sum-of-an-hourglass/
*/

package main

import (
	"fmt"
)

func maxSum(grid [][]int) int {
	max := 0

	for i := 0; i < len(grid)-2; i++ {
		for j := 0; j < len(grid[i])-2; j++ {
			sum := grid[i][j] + grid[i][j+1] + grid[i][j+2]
			sum += grid[i+1][j+1]
			sum += grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]

			if sum > max {
				max = sum
			}
		}
	}

	return max
}

func main() {
	grid := [][]int{{6, 2, 1, 3}, {4, 2, 1, 5}, {9, 2, 8, 7}, {4, 1, 2, 9}}
	//Output: 30
	fmt.Println("%v", maxSum(grid))

	grid = [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
	//Output: 35
	fmt.Println("%v", maxSum(grid))
}
