/*
1848-minimum-distance-to-the-target-element
leetcode/easy/1848. Minimum Distance to the Target Element
URL: https://leetcode.com/problems/minimum-distance-to-the-target-element/
*/

package main

import (
	"fmt"
	"math"
)

func absInt(x, y int) int {
	return int(math.Abs(float64(x - y)))
}

func getMinDistance(nums []int, target int, start int) int {
	min := math.MaxInt32

	for i, v := range nums {
		if v == target && absInt(i, start) < min {
			min = absInt(i, start)
		}
	}

	return min
}

func main() {
	nums := []int{1, 2, 3, 4, 5}
	target := 5
	start := 3

	fmt.Println("%v", getMinDistance(nums, target, start))
	//Output: 1

	nums = []int{1}
	target = 1
	start = 0

	fmt.Println("%v", getMinDistance(nums, target, start))
	//Output: 0

	nums = []int{1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
	target = 1
	start = 0
	fmt.Println("%v", getMinDistance(nums, target, start))
	//Output: 0

	nums = []int{1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
	target = 1
	start = 9
	fmt.Println("%v", getMinDistance(nums, target, start))
}
