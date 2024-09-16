/*
2114-maximum-number-of-words-found-in-sentences
leetcode/easy/2114. Maximum Number of Words Found in Sentences
Difficulty: easy
URL: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
*/

package main

import (
	"strings"
)

func max(rest ...int) int {
	max := rest[0]

	for _, v := range rest {
		if v > max {
			max = v
		}
	}

	return max
}

func mapIterator(m []string) int {
	lengths := make([]int, len(m))

	for _, v := range m {
		lengths = append(lengths, len(strings.Split(v, " ")))
	}

	return max(lengths...)
}

func mostWordsFound(sentences []string) int {
	return max(mapIterator(sentences))
}

func main() {
}