/*
leetcode/easy/1422. Maximum Score After Splitting a String
1422-maximum-score-after-splitting-a-string
uRL: https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/
*/

package main

import "fmt"

func countOne(s string) int {
	cnt := 0
	for _, c := range s {
		if c == '1' {
			cnt++
		}
	}
	return cnt
}

func maxScore(s string) int {
	oneCount := countOne(s)
	zeroCount := 0
	max := 0

	for i := 0; i < len(s)-1; i++ {
		if s[i] == '0' {
			zeroCount++
		} else {
			oneCount--
		}
		if zeroCount+oneCount > max {
			max = zeroCount + oneCount
		}
	}

	return max
}

func main() {
	s := "011101"
	fmt.Println(maxScore(s))
	//Output: 5
	s = "00111"
	fmt.Println(maxScore(s))
	//Output: 5
	s = "1111"
	fmt.Println(maxScore(s))
	//Output: 3
}
