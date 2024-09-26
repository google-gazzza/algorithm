/*
1869-longer-contiguous-segments-of-ones-than-zeros
leetcode/easy/1869. Longer Contiguous Segments of Ones than Zeros
URL: https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
*/

package main

import "fmt"

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func count(s string, i int, target rune) int {
	count := 0

	for i < len(s) && ([]rune(s))[i] == target {
		count++
		i++
	}
	return count
}

func checkZeroOnes(s string) bool {
	maxZeroLen := 0
	maxOneLen := 0

	for i := 0; i < len(s); i++ {
		if s[i] == '1' {
			maxOneLen = max(maxOneLen, count(s, i, '1'))
		} else {
			maxZeroLen = max(maxZeroLen, count(s, i, '0'))
		}
	}

	return maxOneLen > maxZeroLen
}

func main() {
	s := "1101"
	fmt.Println(checkZeroOnes(s))
	//Output: true

	s = "111000"
	fmt.Println(checkZeroOnes(s))
	//Output: false

	s = "110100010"
	fmt.Println(checkZeroOnes(s))
	//Output: false
}
