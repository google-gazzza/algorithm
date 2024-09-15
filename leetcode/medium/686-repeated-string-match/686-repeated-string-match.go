/*
leetcode/easy/686. Repeated String Match
686-repeated-string-match
URL: https://leetcode.com/problems/repeated-string-match/description/

*/

package main

import (
	"fmt"
	"strings"
)

func repeatedStringMatch(a string, b string) int {
	window := ""
	count := 0

	for !strings.Contains(window, b) && len(window) < len(b)+len(a) {
		window += a
		count++
	}

	if !strings.Contains(window, b) {
		return -1
	}

	return count
}

func main() {
	a := "abcd"
	b := "cdabcdab"
	fmt.Printf("%v", repeatedStringMatch(a, b))
	//Output: 3
}
