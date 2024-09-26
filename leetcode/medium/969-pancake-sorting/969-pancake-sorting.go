/*
leetcode/medium/969. Pancake Sorting
969-pancake-sorting
uRL: https://leetcode.com/problems/pancake-sorting/description/
*/

package main

import "fmt"

func findIndex(arr []int, target int) int {
	for i, v := range arr {
		if v == target {
			return i
		}
	}
	return -1
}

func flipArray(arr []int, startIndex int, endIndex int) []int {
	for i := 0; i < (endIndex-startIndex+1)/2; i++ {
		arr[startIndex+i], arr[endIndex-i] = arr[endIndex-i], arr[startIndex+i]
	}

	return arr
}

func pancakeSort(arr []int) []int {
	result := []int{}

	for i := len(arr) - 1; i > 0; i-- {
		if arr[i] == i+1 {
			continue
		}

		if arr[0] == i+1 {
			arr = flipArray(arr, 0, i)
			result = append(result, i+1)
		} else {
			targetIndex := findIndex(arr, i+1)
			arr = flipArray(arr, 0, targetIndex)
			arr = flipArray(arr, 0, i)
			result = append(result, targetIndex+1, i+1)
		}
	}

	return result
}

func main() {
	arr := []int{3, 2, 4, 1}
	fmt.Println(pancakeSort(arr))
	//Output: [4,2,4,3]
}
