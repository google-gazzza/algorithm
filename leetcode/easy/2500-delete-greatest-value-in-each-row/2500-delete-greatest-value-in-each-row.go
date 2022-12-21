/*
2500-delete-greatest-value-in-each-row
leetcode/easy/2500. Delete Greatest Value in Each Row
URL: https://leetcode.com/problems/delete-greatest-value-in-each-row/description/

NOTE: Explanation
*/

package main

import "fmt"

func findMaxAndReplaceToZero(grid []int) int {
	maximum := 0
	index := 0
	for i := 0; i < len(grid); i++ {
		if maximum < (grid)[i] {
			maximum = (grid)[i]
			index = i
		}
	}
	(grid)[index] = 0

	return maximum
}

func deleteGreatestValue(grid [][]int) int {
	maximum := 0

	for i := 0; i < len(grid[0]); i++ {
		maxCandidate := 0
		for j := 0; j < len(grid); j++ {
			candidate := findMaxAndReplaceToZero(grid[j])

			if maxCandidate < candidate {
				maxCandidate = candidate
			}
		}
		maximum += maxCandidate
	}

	return maximum
}

func main() {
	grid := [][]int{{1, 2, 4}, {3, 3, 1}}
	fmt.Println(deleteGreatestValue(grid))
	//Output: 8
}
