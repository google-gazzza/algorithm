/*
leetcode/easy/1243. Array Transformation
1243-array-transformation
uRL: https://leetcode.com/problems/array-transformation/description/
*/

package main

import "fmt"

func transformArray(arr []int) []int {
	isChanged := false

	for {
		temp := make([]int, len(arr))
		copy(temp, arr)

		for i := 1; i < len(arr)-1; i++ {
			if arr[i] > arr[i-1] && arr[i] > arr[i+1] {
				temp[i]--
				isChanged = true
			} else if arr[i] < arr[i-1] && arr[i] < arr[i+1] {
				temp[i]++
				isChanged = true
			}
		}

		if !isChanged {
			break
		} else {
			isChanged = false
		}

		arr = temp
	}

	return arr
}

func main() {
	//Output: [1,4,3,2,5]
	arr := []int{6, 2, 3, 4}
	fmt.Println(transformArray(arr))
	//Output: [6,3,3,4]

	arr = []int{1, 6, 3, 4, 3, 5}
	fmt.Println(transformArray(arr))

}
