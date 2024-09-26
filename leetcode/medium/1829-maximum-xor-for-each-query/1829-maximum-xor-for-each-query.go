/*
leetcode/medium/1829. Maximum XOR for Each Query
1829-maximum-xor-for-each-query
uRL: https://leetcode.com/problems/maximum-xor-for-each-query/description/

*/

package main

import "fmt"

func getMaximumXor(nums []int, maximumBit int) []int {
	xorSum := 0
	result := []int{}
	maxVal := (1 << maximumBit) - 1

	for _, num := range nums {
		xorSum ^= num
		result = append(result, maxVal^xorSum)
	}

	reversedResult := make([]int, len(result))

	for i := 0; i < len(result); i++ {
		reversedResult[i] = result[len(result)-1-i]
	}

	return reversedResult
}

func main() {
	nums := []int{0, 1, 1, 3}
	maximumBit := 2
	fmt.Println(getMaximumXor(nums, maximumBit))
	//Output: [0,3,2,3]

	nums = []int{2, 3, 4, 7}
	maximumBit = 3
	fmt.Println(getMaximumXor(nums, maximumBit))
	//Output: [5,2,6,5]
}
