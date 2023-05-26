/*
leetcode/easy/1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
1455-check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence
uRL: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/

*/

package main

import (
	"fmt"
	"strings"
)

func isPrefixOfWord(sentence string, searchWord string) int {
	words := strings.Split(sentence, " ")

	for i, word := range words {
		if strings.HasPrefix(word, searchWord) {
			return i + 1
		}
	}

	return -1
}

func main() {
	sentence := "i love eating burger"
	searchWord := "burg"
	fmt.Println(isPrefixOfWord(sentence, searchWord))
	//Output: 4

	sentence = "this problem is an easy problem"
	searchWord = "pro"
	fmt.Println(isPrefixOfWord(sentence, searchWord))
	//Output: 2

	sentence = "i am tired"
	searchWord = "you"
	fmt.Println(isPrefixOfWord(sentence, searchWord))
	//Output: -1
}
