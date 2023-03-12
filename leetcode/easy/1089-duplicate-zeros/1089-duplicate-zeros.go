/*
leetcode/easy/1089. Duplicate Zeros
1089-duplicate-zeros
uRL: https://leetcode.com/problems/duplicate-zeros/description/

*/

package main

import "fmt"

func duplicateZeros(arr []int) {
	result := make([]int, 0)

	for _, element := range arr {
		result = append(result, element)

		if element == 0 {
			result = append(result, element)
		}

		if len(result) >= len(arr) {
			break
		}
	}

	for i := 0; i < len(arr); i++ {
		arr[i] = result[i]
	}
}

func main() {
	arr := []int{1, 0, 2, 3, 0, 4, 5, 0}
	duplicateZeros(arr)
	fmt.Println(arr)
	//Output: [1,0,0,2,3,0,0,4]

	arr = []int{1, 2, 3}
	duplicateZeros(arr)
	fmt.Println(arr)
	//Output: [1,2,3]
}