/*
leetcode/easy/2553. Separate the Digits in an Array
2553-separate-the-digits-in-an-array
uRL: https://leetcode.com/problems/separate-the-digits-in-an-array/description/

*/

package main

import (
	"fmt"
	"strconv"
)

func separateDigits(nums []int) []int {
	result := []int{}

	for _, num := range nums {
		for _, char := range strconv.Itoa(num) {
			str := string(char)
			digit, _ := strconv.Atoi(str)
			result = append(result, digit)
		}
	}

	return result
}

func main() {
	nums := []int{13, 25, 83, 77}
	fmt.Println(separateDigits(nums))
	//Output: [1,3,2,5,8,3,7,7]

	nums = []int{7, 1, 3, 9}
	fmt.Println(separateDigits(nums))
	//Output: [7,1,3,9]
}
