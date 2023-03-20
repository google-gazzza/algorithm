/*
leetcode/medium/186. Reverse Words in a String II
186-reverse-words-in-a-string-ii
uRL: https://leetcode.com/problems/reverse-words-in-a-string-ii/description/

*/

package main

import (
	"fmt"
	"strings"
)

func reverseWords(s []byte) {
	str := string(s)
	words := strings.Split(str, " ")
	_reverseWords := []string{}

	for i := len(words) - 1; i >= 0; i-- {
		_reverseWords = append(_reverseWords, words[i])
	}

	str = strings.Join(_reverseWords, " ")

	for i := 0; i < len(str); i++ {
		s[i] = str[i]
	}
}

func main() {
	s := []byte{'t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'}
	reverseWords(s)
	fmt.Println(s)
	//Output: ['b','l','u','e',' ','i','s',' ','s','k','y',' ','t','h','e
}
