/*
1309-decrypt-string-from-alphabet-to-integer-mapping
leetcode/easy/1309. Decrypt String from Alphabet to Integer Mapping
Difficulty: easy
URL: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
*/

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func freqAlphabets(s string) string {
	sb := strings.Builder{}
	charCodes := []string{}

	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '#' {
			charCodes = append([]string{s[i-2 : i]}, charCodes...)
			i -= 2
		} else {
			charCodes = append([]string{s[i : i+1]}, charCodes...)
		}
	}

	for _, val := range charCodes {
		charCode, _ := strconv.Atoi(val)
		sb.WriteString(string(charCode - 1 + 'a'))
	}

	return sb.String()
}

func main() {
	fmt.Println(freqAlphabets("10#11#12"))
	fmt.Println(freqAlphabets("1326#"))
}
