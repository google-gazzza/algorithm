/*
1863-sum-of-all-subset-xor-totals
leetcode/easy/1863. Sum of All Subset XOR Totals
URL: https://leetcode.com/problems/sum-of-all-subset-xor-totals/
*/

package main

import "fmt"

func xorSum(nums []int) int {
	xorResult := 0

	for i := 0; i < len(nums); i++ {
		xorResult ^= nums[i]
	}

	return xorResult
}

func backtracking(nums []int, path []int, xorResult *int) {
	*xorResult += xorSum(path)

	for i := 0; i < len(nums); i++ {
		backtracking(nums[i+1:], append(path, nums[i]), xorResult)
	}
}

func subsetXORSum(nums []int) int {
	xorResult := 0

	for i := 0; i < len(nums); i++ {
		backtracking(nums[i+1:], []int{nums[i]}, &xorResult)
	}

	return xorResult
}

func main() {
	nums := []int{1, 3}
	fmt.Println(subsetXORSum(nums))
	//Output: 6

	nums = []int{5, 1, 6}
	fmt.Println(subsetXORSum(nums))
	//Output: 28
}
