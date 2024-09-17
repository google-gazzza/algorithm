/*
leetcode/medium/442. Find All Duplicates in an Array
442-find-all-duplicates-in-an-array
uRL: https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

*/

package main

import "fmt"

func findDuplicates(nums []int) []int {
	countMap := make(map[int]int)

	for _, num := range nums {
		countMap[num]++
	}

	result := []int{}

	for num, count := range countMap {
		if count != 1 {
			result = append(result, num)
		}
	}

	return result
}

func main() {
	nums := []int{4, 3, 2, 7, 8, 2, 3, 1}
	fmt.Println(findDuplicates(nums))
	//Output: [2,3]

	nums = []int{1, 1, 2}
	fmt.Println(findDuplicates(nums))
	//Output: [1]

	nums = []int{1}
	fmt.Println(findDuplicates(nums))
	//Output: []
}
