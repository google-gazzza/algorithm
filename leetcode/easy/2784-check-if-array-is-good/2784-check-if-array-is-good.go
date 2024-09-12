/*
leetcode/easy/2784. Check if Array is Good
2784-check-if-array-is-good
uRL: https://leetcode.com/problems/check-if-array-is-good/description/
*/

package main

import "sort"

func isGood(nums []int) bool {
	sort.Ints(nums)
	max := nums[len(nums)-1]

	for i := 0; i < len(nums)-1; i++ {
		if nums[i] != i+1 {
			return false
		}
	}

	if max == len(nums)-1 {
		return true
	}

	return false
}

func main() {
	nums := []int{2, 1, 3}
	println(isGood(nums))
	//Output: false

	nums = []int{1, 3, 3, 2}
	println(isGood(nums))
	//Output: true

	nums = []int{1, 1}
	println(isGood(nums))
	//Output: true

	nums = []int{3, 4, 4, 1, 2, 1}
	println(isGood(nums))
	//Output: false
}
