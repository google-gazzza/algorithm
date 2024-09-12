/*
leetcode/medium/1503. Last Moment Before All Ants Fall Out of a Plank
1503-last-moment-before-all-ants-fall-out-of-a-plank
uRL: https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/description/
*/

package main

import "fmt"

func getLastMoment(n int, left []int, right []int) int {
	var leftMax, rightMin int

	if len(right) != 0 {
		rightMin = right[0]
	}

	if len(left) != 0 {
		leftMax = left[0]
	}

	for _, v := range left {
		if v > leftMax {
			leftMax = v
		}
	}
	for _, v := range right {
		if v < rightMin {
			rightMin = v
		}
	}

	if len(left) == 0 {
		return n - rightMin
	}

	if len(right) == 0 {
		return leftMax
	}

	if leftMax > n-rightMin {
		return leftMax
	}

	return n - rightMin
}

func main() {
	n := 4
	left := []int{4, 3}
	right := []int{0, 1}
	fmt.Println(getLastMoment(n, left, right))
	//Output: 4

	n = 7
	left = []int{}
	right = []int{0, 1, 2, 3, 4, 5, 6, 7}
	fmt.Println(getLastMoment(n, left, right))
	//Output: 7

	n = 7
	left = []int{0, 1, 2, 3, 4, 5, 6, 7}
	right = []int{}
	fmt.Println(getLastMoment(n, left, right))
	//Output: 7

	n = 9
	left = []int{5}
	right = []int{4}
	fmt.Println(getLastMoment(n, left, right))

	n = 1000
	left = []int{0}
	right = []int{}
	fmt.Println(getLastMoment(n, left, right))
}
