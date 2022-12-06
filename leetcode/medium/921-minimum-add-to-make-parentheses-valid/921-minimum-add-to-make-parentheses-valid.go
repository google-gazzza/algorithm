/*
921-minimum-add-to-make-parentheses-valid
leetcode/medium/921. Minimum Add to Make Parentheses Valid
URL: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/

NOTE: Explanation
*/

package main

import (
	"fmt"
	"strings"
)

func minAddToMakeValid(s string) int {
	for strings.Contains(s, "()") {
		s = strings.ReplaceAll(s, "()", "")
	}

	return len(s)
}

func main() {
	s := "())"
	fmt.Println(minAddToMakeValid(s))
	//Output: 1

	s = "((("
	fmt.Println(minAddToMakeValid(s))
	//Output: 3
}
