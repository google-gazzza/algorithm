/*
2475-number-of-unequal-triplets-in-array
leetcode/easy/2469. Convert the Temperature
URL: https://leetcode.com/problems/number-of-unequal-triplets-in-array/

NOTE: Explanation
*/

package main

import "fmt"

func unequalTriplets(nums []int) int {
	count := 0

	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			for k := j + 1; k < len(nums); k++ {
				if nums[i] != nums[j] && nums[j] != nums[k] && nums[i] != nums[k] {
					count++
				}
			}
		}
	}

	return count
}

func main() {
	nums := []int{4, 4, 2, 4, 3}
	fmt.Println(unequalTriplets(nums))
	//Output: 3

	nums = []int{1, 1, 1, 1, 1}
	fmt.Println(unequalTriplets(nums))
	//Output: 0
}
