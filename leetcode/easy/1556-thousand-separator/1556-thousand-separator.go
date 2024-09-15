/*
leetcode/easy/1556. Thousand Separator
1556-thousand-separator
uRL: https://leetcode.com/problems/thousand-separator/description/
*/

package main

import (
	"fmt"
	"strconv"
)

func thousandSeparator(n int) string {
	str := strconv.Itoa(n)
	result := ""
	count := 0

	for i := len(str) - 1; i >= 0; i-- {
		result = string(str[i]) + result
		count++

		if count == 3 && i != 0 {
			result = "." + result
			count = 0
		}
	}

	return result
}

func main() {
	n := 987
	fmt.Println(thousandSeparator(n))
	//Output: "987"

	n = 1234
	fmt.Println(thousandSeparator(n))
	//Output: "1.234"
}
