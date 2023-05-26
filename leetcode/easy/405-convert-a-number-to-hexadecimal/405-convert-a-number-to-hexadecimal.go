/*
405-convert-a-number-to-hexadecimal
leetcode/easy/405. Convert a Number to Hexadecimal
URL: https://leetcode.com/problems/convert-a-number-to-hexadecimal/
*/

package main

import (
	"fmt"
	"strconv"
)

func toHex(num int) string {
	str := strconv.FormatUint(uint64(num), 16)

	if len(str) > 8 {
		return str[len(str)-8:]
	}

	return str
}

func main() {
	num := 26
	fmt.Println(toHex(num))
	//Output: "1a"

	num = -1
	fmt.Println(toHex(num))
	//Output: "ffffffff"
}
