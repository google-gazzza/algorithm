/*
leetcode/easy/2562. Find the Array Concatenation Value
2562-find-the-array-concatenation-value
uRL: https://leetcode.com/problems/find-the-array-concatenation-value/description/

*/

package main

import (
	"fmt"
	"strconv"
)

func concantAndConvet(a, b int) int {
	result, _ := strconv.Atoi(strconv.Itoa(a) + strconv.Itoa(b))

	return result
}

func findTheArrayConcVal(nums []int) int64 {
	total := 0

	for len(nums) > 1 {
		first := nums[0]
		last := nums[len(nums)-1]
		nums = nums[1 : len(nums)-1]
		total += concantAndConvet(first, last)
	}

	if len(nums) == 1 {
		total += nums[0]
	}

	return int64(total)
}

func main() {
	nums := []int{7, 52, 2, 4}
	fmt.Println(findTheArrayConcVal(nums))
	//Output: 596
	nums = []int{5, 14, 13, 8, 12}
	fmt.Println(findTheArrayConcVal(nums))
	//Output: 673
}
