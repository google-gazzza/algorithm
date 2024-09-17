/*
leetcode/easy/3005. Count Elements With Maximum Frequency
3005-count-elements-with-maximum-frequency
uRL: https://leetcode.com/problems/count-elements-with-maximum-frequency/description/
*/

package main

import "fmt"

func maxFrequencyElements(nums []int) int {
	m := make(map[int]int)
	max := 0

	for _, v := range nums {
		m[v]++
		if m[v] > max {
			max = m[v]
		}
	}

	result := 0

	for _, v := range m {
		if v == max {
			result += v
		}
	}

	return result
}

func main() {
	nums := []int{1, 2, 2, 3, 1, 4}
	fmt.Println(maxFrequencyElements(nums))
	//Output: 4

	nums = []int{1, 2, 3, 4, 5}
	fmt.Println(maxFrequencyElements(nums))
	//Output: 5
}
