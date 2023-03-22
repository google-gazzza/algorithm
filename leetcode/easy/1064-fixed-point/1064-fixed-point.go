/*
leetcode/easy/1064. Fixed Point
1064-fixed-point
uRL:https://leetcode.com/problems/fixed-point/description/

*/

package main

import "fmt"

func fixedPoint(arr []int) int {
	for i, v := range arr {
		if i == v {
			return i
		}
	}

	return -1
}

func main() {
	arr := []int{-10, -5, 0, 3, 7}
	fmt.Println(fixedPoint(arr))
	//Output: 3

	arr = []int{0, 2, 5, 8, 17}
	fmt.Println(fixedPoint(arr))
	//Output: 0

	arr = []int{-10, -5, 3, 4, 7, 9}
	fmt.Println(fixedPoint(arr))
	//Output: -1
}
