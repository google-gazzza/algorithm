/*
leetcode/easy/2974. Minimum Number Game
2974-minimum-number-game
uRL: https://leetcode.com/problems/minimum-number-game/description/
*/

package main

import "fmt"

func getMinIndex(nums []int) int {
	min := nums[0]
	minIndex := 0

	for i, num := range nums {
		if num < min {
			min = num
			minIndex = i
		}
	}

	return minIndex
}

func numberGame(nums []int) []int {
	result := []int{}

	for len(nums) >= 2 {
		tempArr := []int{}

		minIndex := getMinIndex(nums)
		tempArr = append(tempArr, nums[minIndex])
		nums = append(nums[:minIndex], nums[minIndex+1:]...)

		minIndex = getMinIndex(nums)
		tempArr = append(tempArr, nums[minIndex])
		nums = append(nums[:minIndex], nums[minIndex+1:]...)

		result = append(result, tempArr[1], tempArr[0])
	}

	return result
}

func main() {
	nums := []int{5, 4, 2, 3}
	fmt.Println(numberGame(nums))
	//Output: [3,2,5,4]

	nums = []int{2, 5}
	fmt.Println(numberGame(nums))
	//Output: [5,2]
}
