/*
2062-count-vowel-substrings-of-a-string
leetcode/easy/2062. Count Vowel Substrings of a String
URL: https://leetcode.com/problems/count-vowel-substrings-of-a-string/
*/

package main

import (
	"fmt"
	"strings"
)

func includesAllVowels(word string) bool {
	return strings.Contains(word, "a") &&
		strings.Contains(word, "e") &&
		strings.Contains(word, "i") &&
		strings.Contains(word, "o") &&
		strings.Contains(word, "u")
}

func isAllVowels(word string) bool {
	for _, char := range word {
		if char != 'a' && char != 'e' && char != 'i' && char != 'o' && char != 'u' {
			return false
		}
	}

	return true
}
func countVowelSubstrings(word string) int {
	count := 0

	for i := 0; i < len(word); i++ {
		for j := i; j < len(word); j++ {
			if !isAllVowels(word[i : j+1]) {
				break
			}

			if includesAllVowels(word[i : j+1]) {
				count++
			}
		}
	}

	return count
}

func main() {
	word := "aeiouu"
	fmt.Println(countVowelSubstrings(word))
	//Output: 2

	word = "unicornarihan"
	fmt.Println(countVowelSubstrings(word))
	//Output: 0

	word = "cuaieuouac"
	fmt.Println(countVowelSubstrings(word))
	//Output: 7
}
