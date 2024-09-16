/*
2433-find-the-original-array-of-prefix-xor
leetcode/medium/2433. Find The Original Array of Prefix Xor
URL: https://leetcode.com/problems/find-the-original-array-of-prefix-xor/
*/

package main

import (
	"fmt"
)

func findArray(pref []int) []int {
	cur := pref[0]
	result := []int{pref[0]}

	for i := 1; i < len(pref); i++ {
		result = append(result, cur^pref[i])
		cur = cur ^ (cur ^ pref[i])
	}

	return result
}

func main() {
	pref := []int{5, 2, 0, 3, 1}
	//Output: [5,7,2,3,2]
	fmt.Println("%v", findArray(pref))

	pref = []int{13}
	//Output: [13]
	fmt.Println("%v", findArray(pref))
}