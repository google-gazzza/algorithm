/*
2393-count-strictly-increasing-subarrays
leetcode/medium/2393. Count Strictly Increasing Subarrays
URL: https://leetcode.com/problems/count-strictly-increasing-subarrays/

NOTE: Explanation
*/

package main

import "fmt"

func countSubarrays(nums []int) int64 {
	lastResult := 1
	resultCount := 1

	for i := 1; i < len(nums); i++ {
		if nums[i-1] < nums[i] {
			lastResult = lastResult + 1
		} else {
			lastResult = 1
		}

		resultCount += lastResult
	}

	return int64(resultCount)
}

func main() {
	nums := []int{1, 3, 5, 4, 4, 6}
	fmt.Println(countSubarrays(nums))
	//Output: 10

	nums = []int{1, 2, 3, 4, 5}
	fmt.Println(countSubarrays(nums))
	//Output: 15
}
