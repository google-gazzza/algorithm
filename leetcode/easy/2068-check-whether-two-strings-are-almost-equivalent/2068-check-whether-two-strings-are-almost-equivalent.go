/*
2068-check-whether-two-strings-are-almost-equivalent
leetcode/easy/2068. Check Whether Two Strings are Almost Equivalent
URL: https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
*/

package main

import (
	"fmt"
	"math"
	"strings"
)

func countCharacters(word1 string, word2 string) bool {
	for i := 0; i < len(word1); i++ {
		word1Char := word1[i]
		word1Count := strings.Count(word1, string(word1Char))
		word2Count := strings.Count(word2, string(word1Char))

		if math.Abs(float64(word1Count-word2Count)) > 3 {
			return false
		}
	}

	return true
}

func checkAlmostEquivalent(word1 string, word2 string) bool {
	return countCharacters(word1, word2) && countCharacters(word2, word1)
}

func main() {
	word1 := "aaaa"
	word2 := "bccb"
	fmt.Println(checkAlmostEquivalent(word1, word2))
	//Output: false

	word1 = "abcdeef"
	word2 = "abaaacc"
	fmt.Println(checkAlmostEquivalent(word1, word2))
	//Output: true

	word1 = "cccddabba"
	word2 = "babababab"
	fmt.Println(checkAlmostEquivalent(word1, word2))
	//Output: true
}
