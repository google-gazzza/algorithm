/*
leetcode/easy/456. 132 Pattern
456-132-pattern
uRL: https://leetcode.com/problems/132-pattern/description/
*/

package main

import "fmt"

func find132pattern(nums []int) bool {
	monoStack := [][]int{}
	min := nums[0]

	for i := 1; i < len(nums); i++ {
		for len(monoStack) > 0 && monoStack[len(monoStack)-1][0] < nums[i] {
			monoStack = monoStack[:len(monoStack)-1]
		}

		if len(monoStack) > 0 && monoStack[len(monoStack)-1][1] < nums[i] && monoStack[len(monoStack)-1][0] > nums[i] {
			return true
		}

		monoStack = append(monoStack, []int{nums[i], min})

		if nums[i] < min {
			min = nums[i]
		}
	}

	return false
}

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(find132pattern(nums))
	//Output: false

	nums = []int{3, 1, 4, 2}
	fmt.Println(find132pattern(nums))
	//Output: true

	nums = []int{-1, 3, 2, 0}
	fmt.Println(find132pattern(nums))
	//Output: true

	nums = []int{-2, 1, 1}
	fmt.Println(find132pattern(nums))
	//Output: false

}
