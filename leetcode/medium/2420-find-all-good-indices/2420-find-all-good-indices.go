/*
2420-find-all-good-indices
leetcode/medium/2420. Find All Good Indices
URL: https://leetcode.com/problems/find-all-good-indices/
*/

package main

import (
	"fmt"
)

func isAllTrue(array []bool) bool {
	for _, v := range array {
		if !v {
			return false
		}
	}

	return true
}

func goodIndices(nums []int, k int) []int {
	indexes := []int{}

	if k == 1 {
		for i := 1; i < len(nums)-1; i++ {
			indexes = append(indexes, i)
		}

		return indexes
	}

	decreaseCheckArray := make([]bool, len(nums))
	increaseCheckArray := make([]bool, len(nums))
	decreaseCheckArray[0] = true
	increaseCheckArray[0] = true

	for i := 1; i < len(nums); i++ {
		decreaseCheckArray[i] = nums[i-1] >= nums[i]
		increaseCheckArray[i] = nums[i-1] <= nums[i]
	}

	for i := k; i < len(nums)-k; i++ {
		left := decreaseCheckArray[i-k+1 : i]
		right := increaseCheckArray[i+2 : i+k+1]

		if isAllTrue(left) && isAllTrue(right) {
			indexes = append(indexes, i)
		}
	}

	return indexes
}

func main() {
	nums := []int{2, 1, 1, 1, 3, 4, 1}
	k := 2
	fmt.Println("result:", goodIndices(nums, k))
	// 2,3

	nums = []int{478184, 863008, 716977, 921182, 182844, 350527, 541165, 881224}
	k = 1
	fmt.Println("result:", goodIndices(nums, k))
	// [1,2,3,4,5,6]

	nums = []int{253747, 459932, 263592, 354832, 60715, 408350, 959296}
	k = 2
	fmt.Println("result:", goodIndices(nums, k))
	// 3
}
