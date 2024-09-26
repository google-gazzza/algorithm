/*
1768-merge-strings-alternately
leetcode/easy/1768. Merge Strings Alternately
Difficulty: easy
URL: https://leetcode.com/problems/merge-strings-alternately/
*/

package main

import "fmt"

func mergeAlternately(word1 string, word2 string) string {
	result := ""

	min := func(a, b int) int {
		if a < b {
			return a
		}
		return b
	}

	for i := 0; i < min(len(word1), len(word2)); i++ {
		result += string(word1[i]) + string(word2[i])
	}

	if len(word1) > len(word2) {
		result += word1[len(word2):]
	} else {
		result += word2[len(word1):]
	}

	return result
}

func main() {
	fmt.Println(mergeAlternately("abc", "defcccc"))
	fmt.Println(mergeAlternately("ab", "pqrs"))
}
