/*
leetcode/medium/1529. Minimum Suffix Flips
1529-minimum-suffix-flips
uRL: https://leetcode.com/problems/minimum-suffix-flips/description/
*/

package main

import "fmt"

func minFlips(target string) int {
	anchor := byte('0')
	count := 0

	for i := 0; i < len(target); i++ {
		if anchor != target[i] {
			anchor = target[i]
			count++
		}

	}

	return count
}

func main() {
	target := "10111"
	fmt.Println(minFlips(target))
	//Output: 3
	target = "101"
	fmt.Println(minFlips(target))
	//Output: 3
	target = "00000"
	fmt.Println(minFlips(target))
	//Output: 0
}
