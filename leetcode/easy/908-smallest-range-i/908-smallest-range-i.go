/*
leetcode/easy/908. Smallest Range I
908-smallest-range-i
uRL: https://leetcode.com/problems/smallest-range-i/description/
*/

package main

import (
	"fmt"
)

func max(nums []int) int {
	max := nums[0]
	for _, num := range nums {
		if num > max {
			max = num
		}
	}
	return max
}

func min(nums []int) int {
	min := nums[0]
	for _, num := range nums {
		if num < min {
			min = num
		}
	}
	return min
}

func smallestRangeI(nums []int, k int) int {
	minNum := min(nums)
	maxNum := max(nums)

	if maxNum-minNum <= 2*k {
		return 0
	}

	return maxNum - minNum - 2*k
}

func main() {
	nums := []int{1}
	k := 0
	//fmt.Println(smallestRangeI(nums, k))
	//Output: 0

	nums = []int{0, 10}
	k = 2
	//fmt.Println(smallestRangeI(nums, k))
	//Output: 6

	nums = []int{1, 3, 6}
	k = 3
	//fmt.Println(smallestRangeI(nums, k))
	//Output: 0

	nums = []int{3, 1, 10}
	k = 4
	//fmt.Println(smallestRangeI(nums, k))

	nums = []int{9, 9, 2, 8, 7}
	k = 4
	fmt.Println(smallestRangeI(nums, k))
}
