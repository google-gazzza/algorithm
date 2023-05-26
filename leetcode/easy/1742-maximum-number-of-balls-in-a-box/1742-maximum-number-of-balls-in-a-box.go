/*
1742-maximum-number-of-balls-in-a-box
leetcode/easy/1742. Maximum Number of Balls in a Box
Difficulty: easy
URL: https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
*/

package main

import (
	"fmt"
	"strconv"
)

func countBalls(lowLimit int, highLimit int) int {
	_map := make(map[int]int)
	max := 0

	for lowLimit < highLimit+1 {
		total := 0

		for _, runeChar := range strconv.Itoa(lowLimit) {
			intChar, _ := strconv.Atoi(string(runeChar))
			total += intChar
		}

		_map[total] = _map[total] + 1

		if _map[total] > max {
			max = _map[total]
		}
		lowLimit++
	}

	return max
}

func main() {
	fmt.Println("hello world")
	fmt.Println(countBalls(1, 10))
	fmt.Println(countBalls(5, 15))
}
