/*
leetcode/easy/2506. Count Pairs Of Similar Strings
2506-count-pairs-of-similar-strings
uRL: https://leetcode.com/problems/count-pairs-of-similar-strings/description/
*/

package main

import (
	"fmt"
	"sort"
	"strings"
)

func getUniqChars(s string) string {
	uniqCharMap := make(map[string]bool)

	for _, char := range s {
		uniqCharMap[string(char)] = true
	}
	uniqChars := []string{}

	for char := range uniqCharMap {
		uniqChars = append(uniqChars, char)
	}

	sort.Strings(uniqChars)

	return strings.Join(uniqChars, "")
}

func similarPairs(words []string) int {
	sum := 0

	for i := 0; i < len(words); i++ {
		count := 0
		uniqChars := getUniqChars(words[i])

		for j := i + 1; j < len(words); j++ {
			uniqChars2 := getUniqChars(words[j])

			if uniqChars == uniqChars2 {
				count++
			}
		}

		sum += count
	}

	return sum
}

func main() {
	words := []string{"aba", "aabb", "abcd", "bac", "aabc"}
	fmt.Println(similarPairs(words))
	//Output: 2

	words = []string{"aabb", "ab", "ba"}
	fmt.Println(similarPairs(words))
	//Output: 3
}
