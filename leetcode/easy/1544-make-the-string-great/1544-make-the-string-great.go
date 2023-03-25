/*
leetcode/easy/1544. Make The String Great
1544-make-the-string-great
uRL: https://leetcode.com/problems/make-the-string-great/description/

*/

package main

import (
	"fmt"
	"unicode"
)

func makeGood(s string) string {
	for i := 0; i < len(s)-1; i++ {
		if unicode.ToLower(rune(s[i])) == unicode.ToLower(rune(s[i+1])) {
			if unicode.IsLower(rune(s[i])) && unicode.IsUpper(rune(s[i+1])) ||
				(unicode.IsUpper(rune(s[i])) && unicode.IsLower(rune(s[i+1]))) {
				s = s[:i] + s[i+2:]
				i = -1
			}
		}
	}

	return s
}

func main() {
	s := "leEeetcode"
	fmt.Println(makeGood(s))
	//Output: "leetcode"

	s = "abBAcC"
	fmt.Println(makeGood(s))
	//Output: ""

	s = "s"
	fmt.Println(makeGood(s))
	//Output: "s"
}
