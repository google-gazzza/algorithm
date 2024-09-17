/*
leetcode/easy/830. Positions of Large Groups
830-positions-of-large-groups
uRL: https://leetcode.com/problems/positions-of-large-groups/description/
*/

package main

import "fmt"

func largeGroupPositions(s string) [][]int {
	result := [][]int{}

	for i := 0; i < len(s); i++ {
		startIndex := i
		endIndex := i

		for j := i + 1; j < len(s); j++ {
			if s[i] == s[j] {
				if j == len(s)-1 {
					endIndex = j
					break
				}
				continue
			}
			endIndex = j - 1
			break
		}

		if endIndex-startIndex >= 2 {
			result = append(result, []int{startIndex, endIndex})
			i = endIndex
		}
	}

	return result
}

func main() {
	s := "abbxxxxzzy"
	fmt.Println(largeGroupPositions(s))
	//Output: [[3,6]]

	s = "abc"
	fmt.Println(largeGroupPositions(s))
	//Output: []

	s = "abcdddeeeeaabbbcd"
	fmt.Println(largeGroupPositions(s))
	//Output: [[3,5],[6,9],[12,14]]

	s = "aaa"
	fmt.Println(largeGroupPositions(s))
}
