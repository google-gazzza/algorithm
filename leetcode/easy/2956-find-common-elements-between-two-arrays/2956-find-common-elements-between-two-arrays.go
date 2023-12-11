/*
leetcode/easy/2956. Find Common Elements Between Two Arrays
2956-find-common-elements-between-two-arrays
uRL: https://leetcode.com/problems/find-common-elements-between-two-arrays/description/
*/

package main

import "fmt"

func findIntersectionValues(nums1 []int, nums2 []int) []int {
	set1 := make(map[int]bool)
	set2 := make(map[int]bool)

	for _, v := range nums1 {
		set1[v] = true
	}
	for _, v := range nums2 {
		set2[v] = true
	}

	resultCount1 := 0
	resultCount2 := 0

	for _, v := range nums2 {
		if _, ok := set1[v]; ok {
			resultCount2++
		}
	}
	for _, v := range nums1 {
		if _, ok := set2[v]; ok {
			resultCount1++
		}
	}

	return []int{resultCount1, resultCount2}
}

func main() {
	nums1 := []int{4, 3, 2, 3, 1}
	nums2 := []int{2, 2, 5, 2, 3, 6}
	fmt.Println(findIntersectionValues(nums1, nums2))
	//Output: [3,4]

	nums1 = []int{3, 4, 2, 3}
	nums2 = []int{1, 5}
	fmt.Println(findIntersectionValues(nums1, nums2))
	//Output: [0,0]
}
