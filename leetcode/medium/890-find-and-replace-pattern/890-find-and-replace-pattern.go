/*
890-find-and-replace-pattern
leetcode/medium/890. Find and Replace Pattern
URL: https://leetcode.com/problems/find-and-replace-pattern/description/

NOTE: Explanation
*/

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func convertPatternToDistinguishableDigits(pattern string) string {
	result := pattern
	count := 0

	for i := 0; i < len(pattern); i++ {
		target := string(pattern[i])

		result = strings.ReplaceAll(result, target, strconv.Itoa(count))

		count++
	}

	return result
}

func findAndReplacePattern(words []string, pattern string) []string {
	result := []string{}
	pattern = convertPatternToDistinguishableDigits(pattern)

	for _, word := range words {
		converted_word := convertPatternToDistinguishableDigits(word)
		if converted_word == pattern {
			result = append(result, word)
		}
	}

	return result
}

func main() {
	words := []string{"abc", "deq", "mee", "aqq", "dkd", "ccc"}
	pattern := "abb"
	fmt.Println(findAndReplacePattern(words, pattern))
	//Output: ["mee","aqq"]

	words = []string{"a", "b", "c"}
	pattern = "a"
	fmt.Println(findAndReplacePattern(words, pattern))
	//Output: ["a","b","c"]

	words = []string{"qkuuhjqesjpdrjmkmsiq", "bhtbqamxanbwrtrabqzw", "ssfthcliekxllsndxluk", "ukffypbkgcebqeppsnhw", "jlqnyyyypmsfgbeardur"}
	pattern = "ghtxpauhingxekhnoqnk"
	fmt.Println(findAndReplacePattern(words, pattern))
}
