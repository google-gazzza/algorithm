/*
905-sort-array-by-parity
leetcode/easy/905. Sort Array By Parity
Difficulty: easy
URL: https://leetcode.com/problems/sort-array-by-parity/
*/

package main

import "fmt"

func sortArrayByParity(nums []int) []int {
	even := []int{}
	odd := []int{}

	for _, num := range nums {
		if num%2 == 0 {
			even = append(even, num)
		} else {
			odd = append(odd, num)
		}
	}

	return append(even, odd...)
}

func main() {
	fmt.Println("hello world")

	nums := []int{3, 1, 2, 4}
	//output := []int{2, 4, 3, 1}
	fmt.Println(sortArrayByParity(nums))
}
