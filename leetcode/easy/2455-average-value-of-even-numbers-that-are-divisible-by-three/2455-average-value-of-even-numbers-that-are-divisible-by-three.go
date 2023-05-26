/*
2455-average-value-of-even-numbers-that-are-divisible-by-three
leetcode/easy/2455. Average Value of Even Numbers That Are Divisible by Three
URL: https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
*/

package main

import "fmt"

func sum(nums []int) int {
	sum := 0

	for _, v := range nums {
		sum += v
	}

	return sum
}

func averageValue(nums []int) int {
	list := []int{}

	for _, v := range nums {
		if v%2 == 0 && v%3 == 0 {
			list = append(list, v)
		}
	}

	if len(list) == 0 {
		return 0
	}

	return sum(list) / len(list)
}

func main() {
	nums := []int{1, 3, 6, 10, 12, 15}
	fmt.Println(averageValue(nums))
	//Output: 9

	nums = []int{1, 2, 4, 7, 10}
	fmt.Println(averageValue(nums))
	//Output: 0
}
