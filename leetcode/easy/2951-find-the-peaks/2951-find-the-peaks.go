/*
leetcode/easy/2951. Find the Peaks
2951-find-the-peaks
uRL: https://leetcode.com/problems/find-the-peaks/description/
*/

package main

import (
	"fmt"
)

func findPeaks(mountain []int) []int {
	peaks := []int{}

	for i := 1; i < len(mountain)-1; i++ {
		if mountain[i-1] < mountain[i] && mountain[i] > mountain[i+1] {
			peaks = append(peaks, i)
		}
	}

	return peaks
}

func main() {
	mountain := []int{2, 4, 4}
	//Output: []
	fmt.Println(findPeaks(mountain))

	mountain = []int{1, 4, 3, 8, 5}
	//Output: [1,3]
	fmt.Println(findPeaks(mountain))
}
