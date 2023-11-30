/*
leetcode/easy/2848. Points That Intersect With Cars
2848-points-that-intersect-with-cars
uRL: https://leetcode.com/problems/points-that-intersect-with-cars/description/
*/

package main

import "fmt"

func numberOfPoints(nums [][]int) int {
	set := make(map[string]bool)

	for _, num := range nums {
		for i := num[0]; i <= num[1]; i++ {
			set[string(i)] = true
		}
	}

	return len(set)
}

func main() {
	nums := [][]int{{3, 6}, {1, 5}, {4, 7}}
	fmt.Println(numberOfPoints(nums))
	//Output: 7
	nums = [][]int{{1, 3}, {5, 8}}
	fmt.Println(numberOfPoints(nums))
	//Output: 7
}

