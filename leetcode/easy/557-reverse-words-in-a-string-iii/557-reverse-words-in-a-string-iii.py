/*
557-reverse-words-in-a-string-iii
leetcode/easy/557. Reverse Words in a String III
Difficulty: easy
URL: https://leetcode.com/problems/reverse-words-in-a-string-iii/
*/

package main

import (
	"fmt"
	"strings"
)

func reverseWords(s string) string {
	words := strings.Split(s, " ")

	for i := 0; i < len(words); i++ {
		result := ""

		for j := 0; j < len(words[i]); j++ {
			result = string(words[i][j]) + result
		}

		words[i] = result
	}

	return strings.Join(words, " ")
}

func main() {
	fmt.Println("hello world")

	s := "God Ding"
	output := "doG gniD"

	fmt.Println(reverseWords(s) == output)
}
