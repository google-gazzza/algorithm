/*
leetcode/medium/2461. Maximum Sum of Distinct Subarrays With Length K
2461-maximum-sum-of-distinct-subarrays-with-length-k
uRL: https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/

*/

package main

import (
	"fmt"
)

func maximumSubarraySum(nums []int, k int) int64 {
	countMap := make(map[int]int)
	rangeTotal := 0
	max := 0

	for i := 0; i < k; i++ {
		countMap[nums[i]]++
		rangeTotal += nums[i]
	}

	if len(countMap) == k {
		max = rangeTotal
	}

	for i := k; i < len(nums); i++ {
		countMap[nums[i]]++
		countMap[nums[i-k]]--
		rangeTotal = rangeTotal - nums[i-k] + nums[i]

		if countMap[nums[i-k]] == 0 {
			delete(countMap, nums[i-k])
		}

		if len(countMap) == k {
			if rangeTotal > max {
				max = rangeTotal
			}
		}
	}

	return int64(max)
}

func main() {
	nums := []int{1, 5, 4, 2, 9, 9, 9}
	k := 3
	fmt.Println(maximumSubarraySum(nums, k))
	//Output: 15

	nums = []int{4, 4, 4}
	k = 3
	fmt.Println(maximumSubarraySum(nums, k))
	//Output: 0

	nums = []int{1, 2, 2}
	k = 2
	fmt.Println(maximumSubarraySum(nums, k))
}
