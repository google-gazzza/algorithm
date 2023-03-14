/*
leetcode/easy/459. Repeated Substring Pattern
459-repeated-substring-pattern
uRL: https://leetcode.com/problems/repeated-substring-pattern/description/

*/

package main

import (
	"fmt"
	"strings"
)

func repeatedSubstringPattern(s string) bool {
	if len(s) == 1 {
		return false
	}

	for i := 1; i <= len(s)/2; i++ {
		window := s[:i]

		if len(s)%len(window) == 0 {
			if strings.Count(s, window)*len(window) == len(s) {
				return true
			}
		}
	}

	return false
}

func main() {
	s := "abab"
	fmt.Println(repeatedSubstringPattern(s))
	//Output: true

	s = "aba"
	fmt.Println(repeatedSubstringPattern(s))
	//Output: false

	s = "abcabcabcabc"
	fmt.Println(repeatedSubstringPattern(s))
	//Output: true
}
