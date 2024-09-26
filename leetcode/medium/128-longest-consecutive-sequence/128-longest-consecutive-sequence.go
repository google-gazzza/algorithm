/*
leetcode/medium/128. Longest Consecutive Sequence
128-longest-consecutive-sequence
URL: https://leetcode.com/problems/longest-consecutive-sequence/description/

*/

package main

import (
	"fmt"
	"sort"
)

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func longestConsecutive(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	sort.Ints(nums)
	lastNum := nums[0]
	consecutive := 1
	maxConsecutive := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] == lastNum {
			continue
		}
		if nums[i] == lastNum+1 {
			consecutive++
			lastNum = nums[i]
		} else {
			maxConsecutive = max(maxConsecutive, consecutive)
			lastNum = nums[i]
			consecutive = 1
		}

	}

	return max(maxConsecutive, consecutive)
}

func main() {
	nums := []int{100, 4, 200, 1, 3, 2}
	fmt.Println(longestConsecutive(nums))
	//Output: 4

	nums = []int{0, 3, 7, 2, 5, 8, 4, 6, 0, 1}
	fmt.Println(longestConsecutive(nums))
	//Output: 9

	nums = []int{1, 2, 0, 1}
	fmt.Println(longestConsecutive(nums))
	//Output: 3
}
