/*
leetcode/easy/2965. Find Missing and Repeated Values
2965-find-missing-and-repeated-values
uRL: https://leetcode.com/problems/find-missing-and-repeated-values/description/
*/

package main

import (
	"fmt"
	"sort"
)

func flatten(grid [][]int) []int {
	var result []int

	for _, row := range grid {
		for _, col := range row {
			result = append(result, col)
		}
	}
	return result
}

func hasDuplicate(a []int, b int) bool {
	for _, value := range a {
		if value == b {
			return true
		}
	}

	return false
}

func findMissingAndRepeatedValues(grid [][]int) []int {
	flatted := flatten(grid)
	sort.Ints(flatted)
	filtered := []int{}
	result := []int{}

	for i := 0; i < len(flatted); i++ {
		if hasDuplicate(filtered, flatted[i]) {
			result = append(result, flatted[i])
		} else {
			filtered = append(filtered, flatted[i])
		}
	}

	for i := 0; i < len(flatted); i++ {
		if hasDuplicate(filtered, i+1) {
			continue
		} else {
			result = append(result, i+1)
		}
	}

	return result
}

func main() {
	grid := [][]int{{1, 3}, {2, 2}}
	fmt.Println(findMissingAndRepeatedValues(grid))
	//Output: [2,4]

	grid = [][]int{{9, 1, 7}, {8, 9, 2}, {3, 4, 6}}
	fmt.Println(findMissingAndRepeatedValues(grid))
	//Output: [9,5]
}
