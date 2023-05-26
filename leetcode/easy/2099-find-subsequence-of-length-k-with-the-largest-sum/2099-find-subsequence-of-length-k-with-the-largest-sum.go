/*
2099-find-subsequence-of-length-k-with-the-largest-sum
leetcode/easy/2099. Find Subsequence of Length K With the Largest Sum
URL: https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
*/

package main

import (
	"fmt"
	"sort"
)

func isInclude(nums []int, target int) bool {
	for i := 0; i < len(nums); i++ {
		if nums[i] == target {
			return true
		}
	}

	return false
}

func removeElement(nums []int, val int) []int {
	for i := 0; i < len(nums); i++ {
		if nums[i] == val {
			return append(nums[:i], nums[i+1:]...)
		}
	}

	return nums
}

func maxSubsequence(nums []int, k int) []int {
	copied := append([]int{}, nums...)

	sort.Slice(copied, func(a, b int) bool {
		return copied[a] > copied[b]
	})

	targetWindow := copied[:k]
	result := []int{}

	for i := 0; i < len(nums); i++ {
		if isInclude(targetWindow, nums[i]) {
			result = append(result, nums[i])
			targetWindow = removeElement(targetWindow, nums[i])
		}
	}

	return result
}

func main() {
	nums := []int{2, 1, 3, 3}
	k := 2
	fmt.Println(maxSubsequence(nums, k))
	//Output: [3,3]

	nums = []int{-1, -2, 3, 4}
	k = 3
	fmt.Println(maxSubsequence(nums, k))
	//Output: [-1,3,4]

	nums = []int{3, 4, 3, 3}
	k = 2
	fmt.Println(maxSubsequence(nums, k))
	//Output: [3,4]
}
