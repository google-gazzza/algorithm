/*
leetcode/easy/2540. Minimum Common Value
2540-minimum-common-value
uRL: https://leetcode.com/problems/minimum-common-value/description/

*/

package main

import (
	"fmt"
	"sort"
)

func getCommon(nums1 []int, nums2 []int) int {
	sort.Ints(nums1)
	sort.Ints(nums2)

	i := 0
	j := 0

	for i < len(nums1) && j < len(nums2) {
		if nums1[i] == nums2[j] {
			return nums1[i]
		} else if nums1[i] < nums2[j] {
			i++
		} else {
			j++
		}
	}

	return -1
}

func main() {
	nums1 := []int{1, 2, 3}
	nums2 := []int{2, 4}
	fmt.Println(getCommon(nums1, nums2))
	//Output: 2

	nums1 = []int{1, 2, 3, 6}
	nums2 = []int{2, 3, 4, 5}
	fmt.Println(getCommon(nums1, nums2))
	//Output: 2
}
