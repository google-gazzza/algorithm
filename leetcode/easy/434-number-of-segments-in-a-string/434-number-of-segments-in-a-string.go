/*
434-number-of-segments-in-a-string
leetcode/easy/434. Number of Segments in a String
URL: https://leetcode.com/problems/number-of-segments-in-a-string/
*/

package main

import "strings"

func countSegments(s string) int {
	return len(strings.Fields(s))
}

func main() {
	s := "Hello, my name is John"
	println(countSegments(s))
	//Output: 5
	s = "Hello"
	println(countSegments(s))
	//Output: 1
}
