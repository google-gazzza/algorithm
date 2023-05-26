/*
2436-minimum-split-into-subarrays-with-gcd-greater-than-one
leetcode/medium/2436. Minimum Split Into Subarrays With GCD Greater Than One
URL: https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/
*/

package main

import "fmt"

func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func minimumSplits(nums []int) int {
	res := 0
	gcdUnit := 1

	for _, num := range nums {
		gcdUnit = gcd(gcdUnit, num)

		if gcdUnit == 1 {
			res++
			gcdUnit = num
		}
	}

	return res
}

func main() {
	nums := []int{12, 6, 3, 14, 8}
	fmt.Println(minimumSplits(nums))
	//Output: 2

	nums = []int{4, 12, 6, 14}
	fmt.Println(minimumSplits(nums))
	//Output: 1

	nums = []int{1981402, 28730329, 23776824,
		90153791, 97088698, 18823319,
		30711731, 68358369, 4953505,
		75293276, 93125894, 97088698,
		7302764, 8881740, 17171364,
		13618668, 59930520}
	fmt.Println(minimumSplits(nums))
	// 2
}
