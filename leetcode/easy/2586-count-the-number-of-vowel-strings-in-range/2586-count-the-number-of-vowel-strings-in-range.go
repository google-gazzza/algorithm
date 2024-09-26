/*
leetcode/easy/2586. Count the Number of Vowel Strings in Range
2586-count-the-number-of-vowel-strings-in-range
uRL: https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/

*/

package main

import "fmt"

func hasVoweL(s string, index int) bool {
	if s[index] == 'a' || s[index] == 'e' || s[index] == 'i' || s[index] == 'o' || s[index] == 'u' {
		return true
	}
	return false
}

func vowelStrings(words []string, left int, right int) int {
	count := 0

	for i := left; i <= right; i++ {
		if hasVoweL(words[i], 0) && hasVoweL(words[i], len(words[i])-1) {
			count++
		}
	}

	return count
}

func main() {
	words := []string{"are", "amy", "u"}
	left := 0
	right := 2
	fmt.Println(vowelStrings(words, left, right))
	// 2

	words = []string{"hey", "aeo", "mu", "ooo", "artro"}
	left = 1
	right = 4
	fmt.Println(vowelStrings(words, left, right))
	// 3
}
