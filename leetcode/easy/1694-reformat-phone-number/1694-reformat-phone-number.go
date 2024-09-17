/*
1694-reformat-phone-number
leetcode/easy/1694. Reformat Phone Number
URL: https://leetcode.com/problems/reformat-phone-number/
*/

package main

import (
	"fmt"
	"strings"
)

func reformatNumber(number string) string {
	number = strings.ReplaceAll(number, "-", "")
	number = strings.ReplaceAll(number, " ", "")

	var result string

	for i := 0; i < len(number); i += 3 {
		if i+4 == len(number) {
			result += number[i:i+2] + "-" + number[i+2:i+4]
			break
		}

		if i+2 == len(number) {
			result += number[i : i+2]
			break
		}

		result += number[i:i+3] + "-"
	}

	if result[len(result)-1] == '-' {
		result = result[:len(result)-1]
	}

	return result
}

func main() {
	number := "1-23-45 6"
	fmt.Println(reformatNumber(number))
	//Output: "123-456"

	number = "123 4-567"
	fmt.Println(reformatNumber(number))
	//Output: "123-45-67"

	number = "123 4-5678"
	fmt.Println(reformatNumber(number))
	//Output: "123-456-78"
}
