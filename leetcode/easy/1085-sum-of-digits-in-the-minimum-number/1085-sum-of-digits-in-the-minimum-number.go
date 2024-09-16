/*
1085-sum-of-digits-in-the-minimum-number
leetcode/easy/1085. Sum of Digits in the Minimum Number
Difficulty: easy
URL: https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/
*/

package main

import (
	"fmt"
	"strconv"
)

func sumOfDigits(nums []int) int {
	var min int

	for _, num := range nums {
		if min == 0 || num < min {
			min = num
		}
	}

	sum := 0

	for _, char := range strconv.Itoa(min) {
		i, err := strconv.Atoi(string(char))
		if err != nil {
			panic(err)
		}
		sum += i
	}

	if sum%2 == 0 {
		return 1
	}

	return 0
}

func main() {
	fmt.Println("hello world")

	nums1 := []int{34, 23, 1, 24, 75, 33, 54, 8}
	fmt.Println(sumOfDigits(nums1))
}
