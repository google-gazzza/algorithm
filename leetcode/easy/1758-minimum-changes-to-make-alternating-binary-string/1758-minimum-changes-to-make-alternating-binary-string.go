/*
1758-minimum-changes-to-make-alternating-binary-string
leetcode/easy/1758. Minimum Changes To Make Alternating Binary String
URL: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
*/

package main

import "fmt"

func calculateOperation(s string, zeroFirst bool) int {
	operation := 0

	for i := 0; i < len(s); i++ {
		if zeroFirst {
			if i%2 == 0 && s[i] == '1' {
				operation++
			}
			if i%2 == 1 && s[i] == '0' {
				operation++
			}
		} else {
			if i%2 == 0 && s[i] == '0' {
				operation++
			}
			if i%2 == 1 && s[i] == '1' {
				operation++
			}
		}
	}

	return operation
}

func minOperations(s string) int {
	zeroFirst := calculateOperation(s, true)
	oneFirst := calculateOperation(s, false)

	if zeroFirst < oneFirst {
		return zeroFirst
	}

	return oneFirst
}

func main() {
	s := "0100"
	fmt.Println("%v", minOperations(s))
	//Output: 1

	s = "10"
	fmt.Println("%v", minOperations(s))
	//Output: 0

	s = "1111"
	fmt.Println("%v", minOperations(s))
	//Output: 2

	s = "110010"
	fmt.Println("%v", minOperations(s))
	//Output: 2
}
