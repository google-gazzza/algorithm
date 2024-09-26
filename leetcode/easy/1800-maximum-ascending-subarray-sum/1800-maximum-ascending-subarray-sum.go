/*
1800-maximum-ascending-subarray-sum
leetcode/easy/1800. Maximum Ascending Subarray Sum
URL: https://leetcode.com/problems/maximum-ascending-subarray-sum/
*/

package main

import (
	"fmt"
)

func maxAscendingSum(nums []int) int {
	max := nums[0]
	sum := nums[0]

	for i := 1; i < len(nums); i++ {

		if nums[i] > nums[i-1] {
			sum += nums[i]
			if sum > max {
				max = sum
			}
		} else {
			sum = nums[i]
		}
	}

	return max
}

func main() {
	nums := []int{10, 20, 30, 5, 10, 50}
	fmt.Println("result:", maxAscendingSum(nums))
	// 65

	nums = []int{10, 20, 30, 40, 50}
	fmt.Println("result:", maxAscendingSum(nums))
	//Output: 150

	nums = []int{12, 17, 15, 13, 10, 11, 12}
	fmt.Println("result:", maxAscendingSum(nums))
	// 33
}
