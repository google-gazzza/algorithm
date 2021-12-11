/*
1863-sum-of-all-subset-xor-totals
leetcode/easy/1863. Sum of All Subset XOR Totals
Difficulty: easy
URL: https://leetcode.com/problems/sum-of-all-subset-xor-totals/
*/

package main

import (
	"fmt"
)

func uniqueOccurrences(arr []int) bool {
	m := make(map[int]int)

	for _, v := range arr {
		m[v]++
	}

	m2 := make(map[int]bool)

	for _, v := range m {
		m2[v] = true
	}

	return len(m) == len(m2)
}

func main() {
	fmt.Println("hello world")
}
