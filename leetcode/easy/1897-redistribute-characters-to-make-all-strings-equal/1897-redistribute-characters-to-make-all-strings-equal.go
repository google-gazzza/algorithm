/*
1897-redistribute-characters-to-make-all-strings-equal
leetcode/easy/1897. Redistribute Characters to Make All Strings Equal
URL: https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
*/

package main

import (
	"fmt"
)

func makeEqual(words []string) bool {
	alphabetCount := make(map[string]int)
	for _, word := range words {
		for _, char := range word {
			alphabetCount[string(char)]++
		}
	}

	for _, count := range alphabetCount {
		if count%len(words) != 0 {
			return false
		}
	}

	return true
}

func main() {
	words := []string{"abc", "aabc", "bc"}
	fmt.Println("%v", makeEqual(words))
	// true

	words = []string{"ab", "a"}
	fmt.Println("%v", makeEqual(words))
	// false
}
