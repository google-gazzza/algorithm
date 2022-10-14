/*
944-delete-columns-to-make-sorted
leetcode/easy/944. Delete Columns to Make Sorted
URL: https://leetcode.com/problems/delete-columns-to-make-sorted/
*/

package main

import "fmt"

func minDeletionSize(strs []string) int {
	count := 0

	for i := 0; i < len(strs[0]); i++ {
		for j := 0; j < len(strs)-1; j++ {
			if strs[j][i] > strs[j+1][i] {
				count++
				break
			}
		}
	}

	return count
}

func main() {
	strs := []string{"cba", "daf", "ghi"}
	//Output: 1
	fmt.Println("v:", minDeletionSize(strs))

	strs = []string{"a", "b"}
	//Output: 0
	fmt.Println("v:", minDeletionSize(strs))
}
