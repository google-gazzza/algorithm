/*
leetcode/easy/2913. Subarrays Distinct Element Sum of Squares I
2913-subarrays-distinct-element-sum-of-squares-i
uRL: https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
*/

package main

import (
	"fmt"
	"math"
)

func allSubarrays(arr []int) [][]int {
	subarrays := [][]int{}
	n := len(arr)

	for i := 0; i < n; i++ {
		for j := i; j < n; j++ {
			subarray := arr[i : j+1]
			subarrays = append(subarrays, subarray)
		}
	}

	return subarrays
}

func countDistinct(arr []int) int {
	distinctMap := make(map[int]bool)
	for _, value := range arr {
		distinctMap[value] = true
	}
	return len(distinctMap)
}
func sumCounts(nums []int) int {
	subarrays := allSubarrays(nums)

	result := 0.0

	for _, value := range subarrays {
		result += math.Pow(float64(countDistinct(value)), 2)
	}

	return int(result)
}

func main() {
	arr := []int{1, 2, 1}
	fmt.Println(sumCounts(arr))

	arr = []int{1, 1}
	fmt.Println(sumCounts(arr))
}
