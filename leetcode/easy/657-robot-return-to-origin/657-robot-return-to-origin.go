/*
657-robot-return-to-origin
leetcode/easy/657. Robot Return to Origin
Difficulty: easy
URL: https://leetcode.com/problems/robot-return-to-origin/
*/

package main

import (
	"fmt"
)

type Coordinate struct {
	x int
	y int
}

func judgeCircle(moves string) bool {
	steps := []rune(moves)
	directionMap := make(map[rune]Coordinate)
	directionMap['U'] = Coordinate{0, 1}
	directionMap['D'] = Coordinate{0, -1}
	directionMap['L'] = Coordinate{-1, 0}
	directionMap['R'] = Coordinate{1, 0}

	sum := Coordinate{0, 0}

	for _, char := range steps {
		newMoves := directionMap[char]
		sum.x += newMoves.x
		sum.y += newMoves.y
	}

	return sum.x == 0 && sum.y == 0
}

func main() {
	fmt.Println(judgeCircle("UD"))
}