/*
2457-minimum-addition-to-make-integer-beautiful
leetcode/medium/2457. Minimum Addition to Make Integer Beautiful
URL: https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/
*/

package main

import (
	"fmt"
)

func digitSum(n int64) int {
	sum := 0

	for n > 0 {
		sum += int(n % 10)
		n /= 10
	}

	return sum
}

func increaseGuessNum(n int64, unit int) int64 {
	targetNum := 0
	guess := n / (int64(unit / 10))

	if 10-int(guess%10) > 0 {
		targetNum += 10 - int(guess%10)
	}

	return n + int64(targetNum*(unit/10))
}

func makeIntegerBeautiful(n int64, target int) int64 {
	guessNumber := n
	unit := 10

	for digitSum(guessNumber) > target {
		guessNumber = increaseGuessNum(guessNumber, unit)
		unit *= 10
	}

	return guessNumber - n
}

func main() {
	n := 16
	target := 6
	fmt.Println(makeIntegerBeautiful(int64(n), target))
	//Output: 4

	n = 467
	target = 6
	fmt.Println(makeIntegerBeautiful(int64(n), target))
	////Output: 33
	//
	n = 1
	target = 1
	fmt.Println(makeIntegerBeautiful(int64(n), target))
	////Output: 0
	//
	n = 6068060761
	target = 3
	fmt.Println(makeIntegerBeautiful(int64(n), target))
}
