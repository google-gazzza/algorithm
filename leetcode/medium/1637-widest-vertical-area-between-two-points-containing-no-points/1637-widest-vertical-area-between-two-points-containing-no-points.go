/*
1637-widest-vertical-area-between-two-points-containing-no-points
leetcode/medium/1637. Widest Vertical Area Between Two Points Containing No Points
Difficulty: medium
URL: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
*/

package main

import (
	"fmt"
	"sort"
)

type Set struct {
	hashTable map[int]bool
}

func (this *Set) getSortedValues() []int {
	result := make([]int, 0)

	for k := range this.hashTable {
		result = append(result, k)
	}

	sort.Ints(result)

	return result
}

func Constructor() Set {
	return Set{
		hashTable: make(map[int]bool),
	}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func maxWidthOfVerticalArea(points [][]int) int {
	set := Constructor()

	for _, point := range points {
		set.hashTable[point[0]] = true
	}

	maxDiff := 0
	sortedValues := set.getSortedValues()

	for i := 0; i < len(sortedValues)-1; i++ {
		maxDiff = max(maxDiff, sortedValues[i+1]-sortedValues[i])
	}

	return maxDiff
}

/**
* Your Codec object will be instantiated and called as such:
* obj := Constructor();
* url := obj.encode(longUrl);
* ans := obj.decode(url);
 */

func main() {
	fmt.Println("hello world")

	points := [][]int{{8, 7}, {9, 9}, {7, 4}, {9, 7}}
	fmt.Println(maxWidthOfVerticalArea(points) == 1)

	points = [][]int{{3, 1}, {9, 0}, {1, 0}, {1, 4}, {5, 3}, {8, 8}}
	fmt.Println(maxWidthOfVerticalArea(points) == 3)
}
