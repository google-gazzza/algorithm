/*
2427-number-of-common-factors
leetcode/easy/2427. Number of Common Factor
URL: https://leetcode.com/problems/number-of-common-factors/
*/

package main

import "fmt"

func commonFactors(a int, b int) int {
	max := a

	if b > a {
		max = b
	}

	count := 0

	for i := 1; i <= max; i++ {
		if a%i == 0 && b%i == 0 {
			count++
		}
	}

	return count
}

func main() {
	a := 12
	b := 6
	fmt.Println("%v", commonFactors(a, b))
	//Output: 4

	a = 25
	b = 30
	fmt.Println("%v", commonFactors(a, b))
	// 2
}
