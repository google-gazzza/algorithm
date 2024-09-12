/*
leetcode/easy/747. Largest Number At Least Twice of Others
747-largest-number-at-least-twice-of-others
uRL: https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

*/

package main

import (
	"fmt"
	"sort"
)

func dominantIndex(nums []int) int {
	copyNums := make([]int, len(nums))
	copy(copyNums, nums)

	sort.Ints(copyNums)

	if copyNums[len(copyNums)-1] >= copyNums[len(copyNums)-2]*2 {
		for i, v := range nums {
			if v == copyNums[len(copyNums)-1] {
				return i
			}
		}
	}

	return -1
}

func main() {
	fmt.Println("hello world")

	nums := []int{3, 6, 1, 0}
	fmt.Println(dominantIndex(nums))
	//Output: 1

	nums = []int{1, 2, 3, 4}
	fmt.Println(dominantIndex(nums))
	//Output: -1
}
