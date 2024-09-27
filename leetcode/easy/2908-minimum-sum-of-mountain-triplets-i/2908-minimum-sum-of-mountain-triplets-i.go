/*
leetcode/easy/2908. Minimum Sum of Mountain Triplets I
2908-minimum-sum-of-mountain-triplets-i
uRL: https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/description/
*/

package main

import (
	"fmt"
)

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func minimumSum(nums []int) int {
	if len(nums) < 2 {
		return -1
	}

	var sum int = 1000000000

	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			for k := j + 1; k < len(nums); k++ {
				if nums[i] < nums[j] && nums[j] > nums[k] {
					sum = min(sum, nums[i]+nums[j]+nums[k])
				}
			}

		}
	}

	if sum == 1000000000 {
		return -1
	}

	return sum
}

func main() {
	nums := []int{8, 6, 1, 5, 3}
	//Output: 9
	fmt.Println(minimumSum(nums))

	nums = []int{5, 4, 8, 7, 10, 2}
	//Output: 13
	fmt.Println(minimumSum(nums))

	nums = []int{6, 5, 4, 3, 4, 5}
	//Output: -1
	fmt.Println(minimumSum(nums))
}
