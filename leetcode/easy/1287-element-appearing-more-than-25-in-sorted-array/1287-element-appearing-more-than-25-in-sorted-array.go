/*
leetcode/easy/1287. Element Appearing More Than 25% In Sorted Array
1287-element-appearing-more-than-25-in-sorted-array
uRL: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/

*/

package main

import "fmt"

func findSpecialInteger(arr []int) int {
	threshold := len(arr) / 4

	for i := 0; i < len(arr); i++ {
		if arr[i] == arr[i+threshold] {
			return arr[i]
		}
	}

	return 0
}

func main() {
	arr := []int{1, 2, 2, 6, 6, 6, 6, 7, 10}
	fmt.Println(findSpecialInteger(arr))
	//Output: 6

	arr = []int{1, 1}
	fmt.Println(findSpecialInteger(arr))
	//Output: 1
}
