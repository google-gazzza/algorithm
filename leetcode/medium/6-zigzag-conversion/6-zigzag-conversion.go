/*
6-zigzag-conversion
leetcode/medium/6. Zigzag Conversion
Difficulty: medium
URL: https://leetcode.com/problems/zigzag-conversion/
*/

package main

import (
	"fmt"
	"strings"
)

func convertX(result []strings.Builder, numRows int, s []rune, sequence int) []strings.Builder {
	for i := 0; i < numRows; i++ {
		if len(s)-1 < sequence {
			return result
		}
		result[i].WriteString(string(s[sequence]))
		sequence += 1
	}

	return convertY(result, numRows, s, sequence)
}

func convertY(result []strings.Builder, numRows int, s []rune, sequence int) []strings.Builder {
	for i := numRows - 2; i > 0; i-- {
		if len(s)-1 < sequence {
			return result
		}
		result[i].WriteString(string(s[sequence]))
		sequence += 1
	}

	return convertX(result, numRows, s, sequence)
}

func convert(s string, numRows int) string {
	var sbArr []strings.Builder
	sbArr = make([]strings.Builder, numRows)
	convertX(sbArr, numRows, []rune(s), 0)

	result := strings.Builder{}

	for i := 0; i < len(sbArr); i++ {
		result.WriteString(sbArr[i].String())
	}

	return result.String()
}

func main() {
	s := "PAYPALISHIRING"
	numRows := 3
	//fmt.Printf("%s\n", convert(s, numRows))
	//Output: "PAHNAPLSIIGYIR"

	s = "PAYPALISHIRING"
	numRows = 4
	fmt.Printf("%s\n", convert(s, numRows))
	//Output: "PINALSIGYAHRPI"
}