/*
696-count-binary-substrings
leetcode/easy/696. Count Binary Substrings
Difficulty: easy
URL: https://leetcode.com/problems/count-binary-substrings/
*/

package main

import (
	"fmt"
)

func hasSameBinarySubstring(s string) bool {
	if len(s) < 2 {
		return true
	}

	for i := 0; i < len(s)-1; i++ {
		if s[i] != s[i+1] {
			return false
		}
	}

	return true
}

func countBinarySubstrings(s string) int {
	count := 0

	for i := 0; i < len(s)-1; i++ {
		if s[i] != s[i+1] {
			for left, right := i, i+1; 0 <= left && right < len(s); left, right = left-1, right+1 {
				if hasSameBinarySubstring(s[left:i+1]) && hasSameBinarySubstring(s[i+1:right+1]) {
					count++
				} else {
					break
				}
			}
		}
	}

	return count
}

func main() {
	s := "00110011"
	fmt.Println(countBinarySubstrings(s))
	//Output: 6

	s = "10101"
	fmt.Println(countBinarySubstrings(s))
	// 4

	s = "00110"
	fmt.Println(countBinarySubstrings(s))
	// 3

	s = "00100"
	fmt.Println(countBinarySubstrings(s))
	// 2
}
