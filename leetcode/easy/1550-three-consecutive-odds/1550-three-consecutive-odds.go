/*
1550-three-consecutive-odds
leetcode/easy/1550. Three Consecutive Odds
URL: https://leetcode.com/problems/three-consecutive-odds/
*/

package main

import "fmt"

func threeConsecutiveOdds(arr []int) bool {
	for i := 0; i < len(arr)-2; i++ {
		if arr[i]%2 == 1 && arr[i+1]%2 == 1 && arr[i+2]%2 == 1 {
			return true
		}
	}

	return false
}

func main() {
	arr := []int{2, 6, 4, 1}
	fmt.Println(threeConsecutiveOdds(arr))
	//Output: false
	arr = []int{1, 2, 34, 3, 4, 5, 7, 23, 12}
	fmt.Println(threeConsecutiveOdds(arr))
	//Output: true
}
