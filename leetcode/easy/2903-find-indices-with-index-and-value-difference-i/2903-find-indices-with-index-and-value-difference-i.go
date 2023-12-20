/*
leetcode/easy/2903. Find Indices With Index and Value Difference I
2903-find-indices-with-index-and-value-difference-i
uRL: https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/description/
*/

package main

import (
	"fmt"
	"math"
)

func findIndices(nums []int, indexDifference int, valueDifference int) []int {
	result := []int{}

	for i := 0; i < len(nums); i++ {
		for j := i + indexDifference; j < len(nums); j++ {
			if math.Abs(float64(nums[i]-nums[j])) >= float64(valueDifference) {
				result = append(result, i, j)
				return result
			}
		}
	}

	if len(result) == 0 {
		result = append(result, -1, -1)
	}

	return result
}

func main() {
	nums := []int{5, 1, 4, 1}
	indexDifference := 2
	valueDifference := 4
	fmt.Println(findIndices(nums, indexDifference, valueDifference))

	nums = []int{2, 1}
	indexDifference = 0
	valueDifference = 0
	fmt.Println(findIndices(nums, indexDifference, valueDifference))

	nums = []int{1, 2, 3}
	indexDifference = 2
	valueDifference = 4
	fmt.Println(findIndices(nums, indexDifference, valueDifference))
}
