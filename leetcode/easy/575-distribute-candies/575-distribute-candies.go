/*
575-distribute-candies
leetcode/easy/575. Distribute Candies
URL: https://leetcode.com/problems/distribute-candies/

NOTE: Explanation
*/

package main

import "fmt"

func distributeCandies(candyType []int) int {
	candyMap := make(map[int]int)

	for _, candy := range candyType {
		candyMap[candy]++
	}

	if len(candyMap) >= len(candyType)/2 {
		return len(candyType) / 2
	}

	return len(candyMap)
}

func main() {
	candyType := []int{1, 1, 2, 2, 3, 3}
	fmt.Println(distributeCandies(candyType))
	//Output: 3

	candyType = []int{1, 1, 2, 3}
	fmt.Println(distributeCandies(candyType))
	//Output: 2

	candyType = []int{6, 6, 6, 6}
	fmt.Println(distributeCandies(candyType))
	//Output: 1
}
