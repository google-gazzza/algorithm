/*
leetcode/medium/2038. Remove Colored Pieces if Both Neighbors are the Same Color
2038-remove-colored-pieces-if-both-neighbors-are-the-same-color
uRL: https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/description/
*/

package main

import "fmt"

func winnerOfGame(colors string) bool {
	countA := 0
	countB := 0

	for i := 0; i < len(colors)-2; i++ {
		if colors[i] == colors[i+1] {

			for j := i + 2; j < len(colors); j++ {
				if colors[j] != colors[i] {
					i = j - 1
					break
				}

				if colors[j] == 'A' {
					countA++
				} else {
					countB++
				}

				if j == len(colors)-1 {
					i = j
				}
			}
		}
	}

	if countA > countB {
		return true
	}

	return false
}

func main() {
	colors := "AAABABB"
	//fmt.Println(winnerOfGame(colors))
	//Output: true

	colors = "AA"
	//fmt.Println(winnerOfGame(colors))
	//Output: false

	colors = "ABBBBBBBAAA"
	//fmt.Println(winnerOfGame(colors))
	//Output: false

	colors = "AAAABBBB"
	fmt.Println(winnerOfGame(colors))
	// false

	colors = "BBBBAAAA"
	fmt.Println(winnerOfGame(colors))
	//false
}
