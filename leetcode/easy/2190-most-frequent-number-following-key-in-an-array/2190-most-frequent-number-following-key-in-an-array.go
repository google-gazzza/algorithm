/*
leetcode/easy/2190. Most Frequent Number Following Key In an Array
2190-most-frequent-number-following-key-in-an-array
uRL: https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/description/
*/

package main

import "fmt"

func mostFrequent(nums []int, key int) int {
	countMap := make(map[int]int)

	for index, num := range nums {
		if index != 0 && nums[index-1] == key {
			countMap[num]++
		}
	}

	max := 0
	maxKey := 0

	for key, value := range countMap {
		if value > max {
			max = value
			maxKey = key
		}
	}

	return maxKey
}

func main() {
	nums := []int{1, 100, 200, 1, 100}
	key := 1
	//Output: 100
	fmt.Println(mostFrequent(nums, key))

	nums = []int{2, 2, 2, 2, 3}
	key = 2
	//Output: 2
	fmt.Println(mostFrequent(nums, key))
}
