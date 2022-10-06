/*
2379-minimum-recolors-to-get-k-consecutive-black-blocks
leetcode/easy/2379. Minimum Recolors to Get K Consecutive Black Blocks
URL: https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
*/

package main

import (
	"fmt"
)

func minimumRecolors(blocks string, k int) int {
	white := 0

	for i := 0; i < k; i++ {
		if blocks[i] == 'W' {
			white++
		}
	}

	min := white

	for i := k; i < len(blocks); i++ {
		if blocks[i] == 'W' {
			white++
		}
		if blocks[i-k] == 'W' {
			white--
		}

		if white < min {
			min = white
		}
	}

	return min
}

func main() {
	blocks := "WBBWWBBWBW"
	k := 7
	//Output: 3
	fmt.Println("%v", minimumRecolors(blocks, k))

	blocks = "WBWBBBW"
	k = 2
	fmt.Println("%v", minimumRecolors(blocks, k))
}
