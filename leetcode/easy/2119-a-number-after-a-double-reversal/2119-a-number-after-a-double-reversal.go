/*
2119-a-number-after-a-double-reversal
leetcode/easy/2119. A Number After a Double Reversal
Difficulty: easy
URL: https://leetcode.com/problems/a-number-after-a-double-reversal/
*/

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func reverseString(s string) string {
	sb := strings.Builder{}

	for i := len(s) - 1; i >= 0; i-- {
		sb.WriteByte(s[i])
	}

	return sb.String()
}

func isSameAfterReversals(num int) bool {
	numStr := strconv.Itoa(num)
	reversedStr := reverseString(numStr)
	reversedInt, _ := strconv.Atoi(reversedStr)
	v, _ := strconv.Atoi(reverseString(strconv.Itoa(reversedInt)))

	return v == num
}

func main() {
	fmt.Println(isSameAfterReversals(1800))
	fmt.Println(isSameAfterReversals(526))
}
