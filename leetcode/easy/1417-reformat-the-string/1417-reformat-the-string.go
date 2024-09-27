/*
1417-reformat-the-string
leetcode/easy/1417. Reformat The String
URL: https://leetcode.com/problems/reformat-the-string/
*/

package main

import (
	"fmt"
	"math"
	"strconv"
)

func reformat(s string) string {
	strArr := make([]string, 0)
	digitArr := make([]string, 0)

	for _, c := range s {
		_, err := strconv.Atoi(string(c))

		if err == nil {
			digitArr = append(digitArr, string(c))
		} else {
			strArr = append(strArr, string(c))
		}
	}

	if math.Abs(float64(len(strArr)-len(digitArr))) > 1 {
		return ""
	}

	result := ""

	a, b := strArr, digitArr

	if len(a) < len(b) {
		a, b = b, a
	}

	for i := 0; i < len(a); i++ {
		result += a[i]
		if i < len(b) {
			result += b[i]
		}
	}

	return result
}

func main() {
	s := "a0b1c2"
	fmt.Println("v:", reformat(s))
	//Output: "0a1b2c"

	s = "leetcode"
	fmt.Println("v:", reformat(s))
	//Output: ""

	s = "1229857369"
	fmt.Println("v:", reformat(s))
	//Output: ""
}