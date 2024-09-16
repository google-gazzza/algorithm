/*
leetcode/easy/1317. Convert Integer to the Sum of Two No-Zero Integers
1317-convert-integer-to-the-sum-of-two-no-zero-integers
uRL: https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/description/
*/

package main

import "fmt"

func hasZero(n int) bool {
	if n == 0 {
		return true
	}

	for n > 0 {
		if n%10 == 0 {
			return true
		}
		n /= 10
	}
	return false
}

func getNoZeroIntegers(n int) []int {
	a := 0
	b := n

	for i := 0; i < n; i++ {
		if !hasZero(a) && !hasZero(b) {
			return []int{a, b}
		}
		a++
		b--
	}

	return []int{}
}

func main() {
	n := 2
	fmt.Println(getNoZeroIntegers(n))
	//Output: [1,1]

	n = 11
	fmt.Println(getNoZeroIntegers(n))
	//Output: [2,9]
}
