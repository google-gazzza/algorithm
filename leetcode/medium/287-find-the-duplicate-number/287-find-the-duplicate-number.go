/*
leetcode/medium/287. Find the Duplicate Number
287-find-the-duplicate-number
uRL: https://leetcode.com/problems/find-the-duplicate-number/description/

*/

package main

import "fmt"

func findDuplicate(nums []int) int {
	countMap := make(map[int]int)

	for _, num := range nums {
		countMap[num]++

		if countMap[num] > 1 {
			return num
		}
	}

	return -1
}

func main() {
	nums := []int{1, 3, 4, 2, 2}
	fmt.Println(findDuplicate(nums))
	//Output: 2

	nums = []int{3, 1, 3, 4, 2}
	fmt.Println(findDuplicate(nums))
	//Output: 3
}