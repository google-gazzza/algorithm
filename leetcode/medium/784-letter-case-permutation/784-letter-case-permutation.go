/*
784-letter-case-permutation
leetcode/medium/784. Letter Case Permutation
URL: https://leetcode.com/problems/letter-case-permutation/
*/

package main

import (
	"fmt"
	"strings"
)

func toLowerCase(str string, index int) string {
	result := str[:index] + strings.ToLower(string(str[index])) + str[index+1:]

	return result
}

func toUpperCase(str string, index int) string {
	result := str[:index] + strings.ToUpper(string(str[index])) + str[index+1:]

	return result
}

func bacctracking(s string, index int, result *map[string]bool) {
	for i := index; i < len(s); i++ {
		if s[i] >= '0' && s[i] <= '9' {
			continue
		}

		lower := toLowerCase(s, i)
		(*result)[lower] = true
		upper := toUpperCase(s, i)
		(*result)[upper] = true

		bacctracking(lower, i+1, result)
		bacctracking(upper, i+1, result)
	}
}

func letterCasePermutation(s string) []string {
	result := map[string]bool{s: true}

	bacctracking(s, 0, &result)

	keys := []string{}

	for k := range result {
		keys = append(keys, k)
	}

	return keys
}

func main() {
	s := "a1b2"
	fmt.Println(letterCasePermutation(s))
	//Output: ["a1b2","a1B2","A1b2","A1B2"]
	s = "3z4"
	fmt.Println(letterCasePermutation(s))
	//Output: ["3z4","3Z4"]

	s = "c"
	fmt.Println(letterCasePermutation(s))
}
