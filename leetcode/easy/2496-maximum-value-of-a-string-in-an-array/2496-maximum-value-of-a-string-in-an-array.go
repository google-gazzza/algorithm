/*
2496-maximum-value-of-a-string-in-an-array
leetcode/easy/2496. Maximum Value of a String in an Array
URL: https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/description/

NOTE: Explanation
*/

package main

import (
	"fmt"
	"strconv"
)

func isIncludeNumber(str string) bool {
	for _, v := range str {
		if v >= '0' && v <= '9' {
			return true
		}
	}
	return false
}

func isNumber(str string) bool {
	_, err := strconv.Atoi(str)

	if err != nil {
		return false
	}

	return true
}

func maximumValue(strs []string) int {
	max := 0

	for _, str := range strs {
		if isNumber(str) {
			val, ok := strconv.Atoi(str)
			if ok == nil && val > max {
				max = val
			}
		} else if isIncludeNumber(str) {
			if len(str) > max {
				max = len(str)
			}
		} else {
			if len(str) > max {
				max = len(str)
			}
		}
	}

	return max
}

func main() {
	strs := []string{"alic3", "bob", "3", "4", "00000"}
	fmt.Println(maximumValue(strs))
	//Output: 5

	strs = []string{"1", "01", "001", "0001"}
	fmt.Println(maximumValue(strs))
	//Output: 1
}
