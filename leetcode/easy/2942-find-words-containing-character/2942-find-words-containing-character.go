/*
leetcode/easy/2942. Find Words Containing Character
2942-find-words-containing-character
uRL: https://leetcode.com/problems/find-words-containing-character/description/
*/

package main

import "fmt"

func findWordsContaining(words []string, x byte) []int {
	resultIndexes := []int{}

	for i, word := range words {
		for _, letter := range word {
			if byte(letter) == x {
				resultIndexes = append(resultIndexes, i)
				break
			}
		}
	}

	return resultIndexes
}

func main() {
	words := []string{"leet", "code"}
	x := "e"
	fmt.Println(findWordsContaining(words, x[0]))
	//Output: [0,1]

	words = []string{"abc", "bcd", "aaaa", "cbc"}
	x = "a"
	fmt.Println(findWordsContaining(words, x[0]))
	//Output: [0,2]

	words = []string{"abc", "bcd", "aaaa", "cbc"}
	x = "z"
	fmt.Println(findWordsContaining(words, x[0]))
	//Output: []
}
