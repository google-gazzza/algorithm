/*
744-find-smallest-letter-greater-than-target
leetcode/easy/744. Find Smallest Letter Greater Than Target
URL: https://leetcode.com/problems/find-smallest-letter-greater-than-target/

NOTE: Explanation
*/

package main

import (
	"fmt"
	"sort"
)

func nextGreatestLetter(letters []byte, target byte) byte {
	sort.Slice(letters, func(a, b int) bool {
		return letters[a] < letters[b]
	})

	for _, v := range letters {
		if v > target {
			return v
		}
	}

	return letters[0]
}

func main() {
	letters := []byte{'c', 'f', 'j'}
	target := 'a'
	fmt.Println(nextGreatestLetter(letters, byte(target)))
	//Output: "c"

	letters = []byte{'c', 'f', 'j'}
	target = 'c'
	fmt.Println(nextGreatestLetter(letters, byte(target)))
	//Output: "f"

	letters = []byte{'x', 'x', 'y', 'y'}
	target = 'z'
	fmt.Println(nextGreatestLetter(letters, byte(target)))
	//Output: "x"
}
