/*
1708-largest-subarray-length-k
leetcode/easy/1708. Largest Subarray Length K
URL: https://leetcode.com/problems/largest-subarray-length-k/
*/

package main

import "fmt"

func largestSubarray(nums []int, k int) []int {
	subArrays := [][]int{}

	for i := 0; i < len(nums)-k+1; i++ {
		subArrays = append(subArrays, nums[i:i+k])
	}

	for i := 0; i < k; i += 1 {
		max := 0

		for _, subArray := range subArrays {
			if subArray[i] > max {
				max = subArray[i]
			}
		}

		candidates := [][]int{}

		for _, subArray := range subArrays {
			if subArray[i] == max {
				candidates = append(candidates, subArray)
			}
		}

		subArrays = candidates
	}

	return subArrays[0]
}

func main() {
	nums := []int{1, 4, 5, 2, 3}
	k := 3
	fmt.Println(largestSubarray(nums, k))
	//Output: [5,2,3]

	nums = []int{1, 4, 5, 2, 3}
	k = 4
	fmt.Println(largestSubarray(nums, k))
	//Output: [4,5,2,3]

	nums = []int{1, 4, 5, 2, 3}
	k = 1
	fmt.Println(largestSubarray(nums, k))
	//Output: [5]
}