/*
leetcode/easy/2465. Number of Distinct Averages
2465-number-of-distinct-averages
uRL: https://leetcode.com/problems/number-of-distinct-averages/description/

*/

package main

import (
	"fmt"
	"sort"
)

func distinctAverages(nums []int) int {
	sort.Ints(nums)
	length := len(nums)
	set := make(map[float32]bool)

	for i := 0; i < len(nums)/2; i++ {
		minNum := float32(nums[i])
		maxNum := float32(nums[length-i-1])

		set[(minNum+maxNum)/2] = true
	}

	return len(set)
}

func main() {
	nums := []int{4, 1, 4, 0, 3, 5}
	fmt.Println(distinctAverages(nums))
	//Output: 2

	nums = []int{1, 100}
	fmt.Println(distinctAverages(nums))
	//Output: 1

	nums = []int{9, 5, 7, 8, 7, 9, 8, 2, 0, 7}
	fmt.Println(distinctAverages(nums))
	//Output: 5
}
