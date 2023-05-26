/*
leetcode/easy/2574. Left and Right Sum Differences
2574-left-and-right-sum-differences
uRL: https://leetcode.com/problems/left-and-right-sum-differences/description/

*/

package main

import (
	"fmt"
	"math"
)

func leftRigthDifference(nums []int) []int {
	leftSum := 0
	rightSum := 0

	for _, num := range nums {
		rightSum += num
	}

	result := make([]int, len(nums))

	for i := 0; i < len(nums); i++ {
		leftSum += nums[i]
		result[i] = int(math.Abs(float64(leftSum - rightSum)))
		rightSum -= nums[i]
	}

	return result
}

func main() {
	nums := []int{10, 4, 8, 3}
	fmt.Println(leftRigthDifference(nums))
	//Output: [15,1,11,22]

	nums = []int{1}
	fmt.Println(leftRigthDifference(nums))
	//Output: [0]
}
