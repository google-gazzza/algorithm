/*
492-construct-the-rectangle
leetcode/easy/492. Construct the Rectangle
URL: https://leetcode.com/problems/construct-the-rectangle/
*/

package main

import "fmt"

func constructRectangle(area int) []int {
	l := area
	w := 1
	nextLCandidate := 2

	for l > w && l > nextLCandidate {
		candidate := area / nextLCandidate

		if candidate%1 == 0 && candidate*nextLCandidate == area {
			l = candidate
			w = nextLCandidate
		}

		nextLCandidate++
	}

	return []int{l, w}
}

func main() {
	area := 4
	fmt.Println(constructRectangle(area))
	// Output: [2,2]

	area = 37
	fmt.Println(constructRectangle(area))
	// Output: [37,1]

	area = 122122
	fmt.Println(constructRectangle(area))
	// Output: [427,286]
}
