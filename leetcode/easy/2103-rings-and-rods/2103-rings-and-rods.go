/*
2103-rings-and-rods
leetcode/easy/2103. Rings and Rods
Difficulty: easy
URL: https://leetcode.com/problems/rings-and-rods/
*/

package main

import (
	"fmt"
	"strconv"
)

type Rod struct {
	R            int
	G            int
	B            int
	hasAllColors bool
}

func RodConstructor(R, G, B int) *Rod {
	return &Rod{R: 0, G: 0, B: 0}
}

func countPoints(rings string) int {
	rods := make([]*Rod, 10)
	for i := 0; i < 10; i++ {
		rods[i] = RodConstructor(0, 0, 0)
	}

	for i := 0; i < len(rings)-1; i++ {
		targetRodsIndex := rings[i+1]
		index, _ := strconv.Atoi(string(targetRodsIndex))
		color := rings[i]
		rod := *(rods[index])

		if color == 'R' {
			rod.R++
		} else if color == 'G' {
			rod.G++
		} else if color == 'B' {
			rod.B++
		}

		if rod.R > 0 && rod.G > 0 && rod.B > 0 {
			rod.hasAllColors = true
		}

		rods[index] = &rod
	}

	totalCount := 0

	for i := 0; i < 10; i++ {
		rod := *(rods[i])
		if rod.hasAllColors {
			totalCount += 1
		}
	}

	return totalCount
}

func main() {
	rings := "B0B6G0R6R0R6G9"
	fmt.Println(countPoints(rings))
	//Output: 1

	rings = "B0R0G0R9R0B0G0"
	fmt.Println(countPoints(rings))
	//Output: 1

	rings = "G4"
	fmt.Println(countPoints(rings))
	//Output: 0
}