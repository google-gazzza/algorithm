/*
1518-water-bottles
leetcode/easy/1518. Water Bottles
URL: https://leetcode.com/problems/water-bottles/

NOTE: Explanation
*/

package main

import "fmt"

func numWaterBottles(numBottles int, numExchange int) int {
	drinkCount := 0
	emptyBottleCount := 0

	for numBottles > 0 {
		drinkCount += numBottles
		emptyBottleCount += numBottles

		numBottles = emptyBottleCount / numExchange
		emptyBottleCount = emptyBottleCount % numExchange
	}

	return drinkCount
}

func main() {
	numBottles := 9
	numExchange := 3
	fmt.Println(numWaterBottles(numBottles, numExchange))
	//Output: 13

	numBottles = 15
	numExchange = 4
	fmt.Println(numWaterBottles(numBottles, numExchange))
	//Output: 19

	numBottles = 15
	numExchange = 8
	fmt.Println(numWaterBottles(numBottles, numExchange))
	// Output: 17
}
