/*
2460-apply-operations-to-an-array
leetcode/easy/2460. Apply Operations to an Array
URL: https://leetcode.com/problems/apply-operations-to-an-array/
*/

package main

import "fmt"

func applyOperations(nums []int) []int {
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] == nums[i+1] {
			nums[i] *= 2
			nums[i+1] = 0
		}
	}

	result := []int{}
	zeros := []int{}

	for _, v := range nums {
		if v == 0 {
			zeros = append(zeros, v)
		} else {
			result = append(result, v)
		}
	}

	result = append(result, zeros...)

	return result
}

func main() {
	nums := []int{1, 2, 2, 1, 1, 0}
	fmt.Println(applyOperations(nums))
	//Output: [1,4,2,0,0,0]

	nums = []int{0, 1}
	fmt.Println(applyOperations(nums))
	//Output: [1,0]
}
