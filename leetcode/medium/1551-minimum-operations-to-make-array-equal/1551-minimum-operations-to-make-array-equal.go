/*
1551-minimum-operations-to-make-array-equal
leetcode/medium/1551. Minimum Operations to Make Array Equal
URL: https://leetcode.com/problems/minimum-operations-to-make-array-equal/

NOTE: Explanation
*/

package main

import "fmt"

func minOperations(n int) int {
	operations := 0

	if n%2 == 0 {
		for i := 0; i < (n / 2); i++ {
			operations += 4*i + 2
		}
	} else {
		for i := 1; i < (n/2)+1; i++ {
			operations += 4 * i
		}
	}

	return operations / 2
}

func main() {
	n := 3
	fmt.Println(minOperations(n))
	//Output: 2
	n = 6
	fmt.Println(minOperations(n))
	// 1,3,5, 7,9
	//Output: 9
}
