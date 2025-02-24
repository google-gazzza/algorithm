/*
leetcode/easy/824. Goat Latin
824-goat-latin
uRL: https://leetcode.com/problems/goat-latin/description/
*/

package main

import "strings"

func isStartWithVowel(word string) bool {
	target := strings.ToLower(string(word[0]))

	if target == "a" || target == "e" || target == "i" || target == "o" || target == "u" {
		return true
	}

	return false
}
func toGoatLatin(sentence string) string {
	chunks := strings.Split(sentence, " ")

	for i, word := range chunks {
		if isStartWithVowel(word) {
			chunks[i] = word + "ma"
		} else {
			chunks[i] = word[1:] + string(word[0]) + "ma"
		}

		for j := 0; j <= i; j++ {
			chunks[i] += "a"
		}
	}

	return strings.Join(chunks, " ")
}

func main() {
}
