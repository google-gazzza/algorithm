/*
leetcode/medium/1647. Minimum Deletions to Make Character Frequencies Unique
1647-minimum-deletions-to-make-character-frequencies-unique
uRL: https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/description/
*/

package main

import (
	"fmt"
	"sort"
)

func minDeletions(s string) int {
	frequenceCountMap := make(map[string]int)

	for _, v := range s {
		frequenceCountMap[string(v)]++
	}

	inverseArray := make([]int, 0)

	for _, v := range frequenceCountMap {
		inverseArray = append(inverseArray, v)
	}

	hasDuplicates := true
	count := 0
	sort.Ints(inverseArray)

	for hasDuplicates {
		hasDuplicates = false

		for i := 0; i < len(inverseArray)-1; i++ {
			if inverseArray[i] == inverseArray[i+1] && inverseArray[i] > 0 {
				inverseArray[i]--
				count++
				hasDuplicates = true
				break
			}
		}
	}

	return count
}

func main() {
	s := "aaabbbcc"
	//fmt.Println(minDeletions(s))
	//Output: 2

	s = "ceabaacb"
	//fmt.Println(minDeletions(s))
	//Output: 2

	s = "bbcebab"
	fmt.Println(minDeletions(s))
	// 2
}
