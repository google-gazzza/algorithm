/*
leetcode/medium/453. Minimum Moves to Equal Array Elements
453-minimum-moves-to-equal-array-elements
uRL: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/

*/

package main

import (
	"fmt"
	"sort"
)

func minMoves(nums []int) int {
	count := 0

	sort.Ints(nums)

	for i := len(nums) - 1; i > 0; i-- {
		count += nums[i] - nums[0]
	}

	return count
}

func main() {
	nums := []int{1, 2, 3}
	fmt.Println(minMoves(nums))
	//Output: 3

	nums = []int{1, 1, 1}
	fmt.Println(minMoves(nums))
	//Output: 0

	nums = []int{1, 1, 1000000000}
	fmt.Println(minMoves(nums))
}
