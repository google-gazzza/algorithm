/*
1351-count-negative-numbers-in-a-sorted-matrix
leetcode/easy/1351. Count Negative Numbers in a Sorted Matrix
Difficulty: easy
URL: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
*/

package main

import (
	"fmt"
)

func countNegatives(grid [][]int) int {
	var count int

	for _, row := range grid {
		for _, num := range row {
			if num < 0 {
				count++
			}
		}
	}

	return count
}

func main() {
	fmt.Println("hello world")
	grid := [][]int{{4, 3, 2, -1}, {3, 2, 1, -1}, {1, 1, -1, -2}, {-1, -1, -2, -3}}
	output := 8
	fmt.Println(countNegatives(grid) == output)
}
