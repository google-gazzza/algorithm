/*
leetcode/easy/503. Next Greater Element II
503-next-greater-element-ii
uRL: https://leetcode.com/problems/next-greater-element-ii/description/

NOTE: Explanation
*/

package main

import (
	"fmt"
)

func deepCopyAndMultiply(nums []int) []int {
	_nums := make([]int, len(nums))

	for i := 0; i < len(nums); i++ {
		_nums[i] = nums[i]
	}

	_nums = append(_nums, nums...)

	return _nums
}

func nextGreaterElements(nums []int) []int {
	result := make([]int, len(nums))
	_nums := deepCopyAndMultiply(nums)

	for i := 0; i < len(nums); i++ {
		result[i] = -1

		for j := i + 1; j < len(_nums); j++ {
			if nums[i] < _nums[j] {
				result[i] = _nums[j]
				break
			}
		}

	}

	return result
}

func main() {
	nums := []int{1, 2, 1}
	fmt.Println(nextGreaterElements(nums))
	//Output: [2,-1,2]

	nums = []int{1, 2, 3, 4, 3}
	fmt.Println(nextGreaterElements(nums))
	//Output: [2,3,4,-1,4]

	nums = []int{5, 4, 3, 2, 1}
	fmt.Println(nextGreaterElements(nums))
	//Output [-1,5,4,3,2]
	//Expected [-1,5,5,5,5]

	nums = []int{-1, -2}
	fmt.Println(nextGreaterElements(nums))
	//Output: [-1,-1]
}
