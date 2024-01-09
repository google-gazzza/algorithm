/*
leetcode/medium/880. Decoded String at Index
880-decoded-string-at-index
uRL: https://leetcode.com/problems/decoded-string-at-index/description/
*/

package main

import (
	"fmt"
)

// NOTE: memory limit exceeded error
//func decodeAtIndex(s string, k int) string {
//	decodedText := ""
//
//	for len(decodedText) < k {
//		for i := 0; i < len(s); i++ {
//			if len(decodedText) >= k {
//				break
//			}
//			if s[i] >= 48 && s[i] <= 57 {
//				decodedText = strings.Repeat(decodedText, int(s[i]-48))
//			} else {
//				decodedText = decodedText + string(s[i])
//			}
//		}
//	}
//
//	return string(decodedText[k-1])
//}

func decodeAtIndex(s string, k int) string {
	decodedLength := 0

	for i := 0; i < len(s); i++ {
		if s[i] >= '0' && s[i] <= '9' {
			repeat := int(s[i] - '0')
			decodedLength *= repeat
		} else {
			decodedLength++
		}
	}

	for i := len(s) - 1; i >= 0; i-- {
		if s[i] >= '0' && s[i] <= '9' {
			repeat := int(s[i] - '0')
			decodedLength /= repeat
			k %= decodedLength
		} else {
			if k == decodedLength || k == 0 {
				return string(s[i])
			}
			decodedLength--
		}
	}

	return ""
}

func main() {
	s := "leet2code3"
	k := 10
	fmt.Println(decodeAtIndex(s, k))
	//Output: "o"

	s = "ha22"
	k = 5
	//fmt.Println(decodeAtIndex(s, k))
	//Output: "h"

	s = "a2345678999999999999999"
	k = 1
	//fmt.Println(decodeAtIndex(s, k))
	//Output: "a"
}
