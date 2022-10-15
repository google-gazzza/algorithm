/*
1641-count-sorted-vowel-strings
leetcode/medium/1641. Count Sorted Vowel Strings
URL: https://leetcode.com/problems/count-sorted-vowel-strings/
*/

package main

import "fmt"

func sum(nums []int) int {
	sum := 0
	for _, num := range nums {
		sum += num
	}
	return sum
}

func countVowelStrings(n int) int {
	previous := []int{1, 1, 1, 1, 1}
	next := []int{0, 0, 0, 0, 0}

	if n == 1 {
		return 5
	}

	for i := 1; i < n; i++ {
		for j := 0; j < 5; j++ {
			next[j] = sum(previous[j:])
		}
		previous = next
	}

	return sum(next)
}

func main() {
	n := 1
	fmt.Println("v:", countVowelStrings(n))
	//Output: 5

	n = 2
	fmt.Println("v:", countVowelStrings(n))
	// 15

	n = 3
	fmt.Println("v:", countVowelStrings(n))

	n = 33
	fmt.Println("v:", countVowelStrings(n))
}
