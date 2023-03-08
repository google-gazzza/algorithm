/*
leetcode/easy/917. Reverse Only Letters
917-reverse-only-letters
uRL: https://leetcode.com/problems/reverse-only-letters/description/

*/

package main

import (
	"fmt"
	"unicode"
)

func reverseOnlyLetters(str string) string {
	letter := []rune(str)

	for _, r := range str {
		if unicode.IsLetter(r) {
			letter = append(letter, r)
		}
	}

	lastIndex := len(letter) - 1

	strArray := []rune(str)

	for i, r := range strArray {
		if unicode.IsLetter(r) {
			strArray[i] = letter[lastIndex]
			lastIndex--
		}
	}

	return string(strArray)
}

func main() {
	s := "ab-cd"
	fmt.Println(reverseOnlyLetters(s))
	//Output: "dc-ba"

	s = "a-bC-dEf-ghIj"
	fmt.Println(reverseOnlyLetters(s))
	//Output: "j-Ih-gfE-dCba"

	s = "Test1ng-Leet=code-Q!"
	fmt.Println(reverseOnlyLetters(s))
	//Output: "Qedo1ct-eeLg=ntse-T!"
}
