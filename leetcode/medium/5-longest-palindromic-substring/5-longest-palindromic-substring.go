/*
5-longest-palindromic-substring
leetcode/medium/5. Longest Palindromic Substring
URL: https://leetcode.com/problems/longest-palindromic-substring/
*/

package main

import (
	"fmt"
)

func getMaxPalindrome(s string, left int, right int) string {
	for left >= 0 && right < len(s) && s[left] == s[right] {
		if left-1 >= 0 && right+1 < len(s) && s[left-1] == s[right+1] {
			left--
			right++
		} else {
			return s[left : right+1]
		}
	}
	return ""
}

func longestPalindrome(s string) string {
	if len(s) == 1 {
		return s
	}

	maxStr := string(s[0])

	for i := 1; i < len(s); i++ {
		left := i - 1
		right := i

		// even
		if right < len(s) && s[left] == s[right] {
			result := getMaxPalindrome(s, left, right)
			if len(result) > len(maxStr) {
				maxStr = result
			}
		}

		// odd
		left = i - 1
		right = i + 1
		if right < len(s) && s[left] == s[right] {
			result := getMaxPalindrome(s, left, right)
			if len(result) > len(maxStr) {
				maxStr = result
			}
		}
	}

	return maxStr
}

func main() {
	s := "babad"
	fmt.Println("result:", longestPalindrome(s))
	// bab

	s = "bb"
	fmt.Println("result:", longestPalindrome(s))
	// bb

	s = "ccc"
	fmt.Println("result:", longestPalindrome(s))
	// ccc
}