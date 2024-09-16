/*
leetcode/medium/2295. Replace Elements in an Array
2295-replace-elements-in-an-array
uRL: https://leetcode.com/problems/replace-elements-in-an-array/description/

*/

package main

import "fmt"

func arrayChange(nums []int, operations [][]int) []int {
	for _, operation := range operations {
		targetValue, replaceValue := operation[0], operation[1]

		for i, num := range nums {
			if num == targetValue {
				nums[i] = replaceValue
				break
			}
		}
	}

	return nums
}

func main() {
	nums := []int{1, 2, 4, 6}
	operations := [][]int{{1, 3}, {4, 7}, {6, 1}}
	fmt.Println(arrayChange(nums, operations))
	//Output: [3,2,7,1]

	nums = []int{1, 2}
	operations = [][]int{{1, 3}, {2, 1}, {3, 2}}
	fmt.Println(arrayChange(nums, operations))
	//Output: [2,1]
}
