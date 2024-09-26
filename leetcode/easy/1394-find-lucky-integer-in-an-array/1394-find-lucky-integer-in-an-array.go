/*
leetcode/easy/1394. Find Lucky Integer in an Array
1394-find-lucky-integer-in-an-array
uRL: https://leetcode.com/problems/find-lucky-integer-in-an-array/description/

*/

package main

import "fmt"

func findLucky(arr []int) int {
	countMap := make(map[int]int)

	for _, v := range arr {
		countMap[v]++
	}

	max := -1

	for k, v := range countMap {
		if k == v && k > max {
			max = k
		}
	}

	return max
}

func main() {
	arr := []int{2, 2, 3, 4}
	fmt.Println(findLucky(arr))
	//Output: 2

	arr = []int{1, 2, 2, 3, 3, 3}
	fmt.Println(findLucky(arr))
	//Output: 3

	arr = []int{2, 2, 2, 3, 3}
	fmt.Println(findLucky(arr))
	//Output: -1
}
