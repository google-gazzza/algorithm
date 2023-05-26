/*
1047-remove-all-adjacent-duplicates-in-string
leetcode/easy/1047. Remove All Adjacent Duplicates In String
Difficulty: easy
URL: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
*/

package main

import (
	"fmt"
)

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func removeDuplicates(s string) string {
	charCodes := []rune(s + "?!")

	for i := 0; i < len(charCodes)-2; i++ {
		i = max(i, 0)

		if charCodes[i] == charCodes[i+1] {
			charCodes = append(charCodes[:i], charCodes[i+2:]...)
			i -= 2
		}
	}

	return string(charCodes[:len(charCodes)-2])
}
