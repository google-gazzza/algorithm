/*
1876-substrings-of-size-three-with-distinct-characters
leetcode/easy/1876. Substrings of Size Three with Distinct Characters
URL: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/:
*/

package main

import "fmt"

func countGoodSubstrings(s string) int {
	var count int
	for i := 0; i < len(s)-2; i++ {
		if s[i] != s[i+1] && s[i] != s[i+2] && s[i+1] != s[i+2] {
			count++
		}
	}

	return count
}

func main() {
	s := "xyzzaz"
	fmt.Println(countGoodSubstrings(s))
	// 1

	s = "aababcabc"
	fmt.Println(countGoodSubstrings(s))
	// 4
}
