/*
leetcode/easy/2928. Distribute Candies Among Children I
2928-distribute-candies-among-children-i
uRL: https://leetcode.com/problems/distribute-candies-among-children-i/description/
*/

package main

import "fmt"

func distributeCandies(candyCount int, limit int) int {
	combination := 0

	for i := 0; i <= limit; i++ {
		for j := 0; j <= limit; j++ {
			for k := 0; k <= limit; k++ {
				if i+j+k == candyCount {
					combination++
				}
			}
		}
	}

	return combination
}

func main() {
	n := 5
	limit := 2
	//Output: 3
	fmt.Println(distributeCandies(n, limit))

	n = 3
	limit = 3
	//Output: 10
	fmt.Println(distributeCandies(n, limit))
}
