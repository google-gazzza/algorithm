/*
2125-number-of-laser-beams-in-a-bank
leetcode/easy/2125. Number of Laser Beams in a Bank
Difficulty: easy
URL: https: //leetcode.com/problems/number-of-laser-beams-in-a-bank/
*/

package main

import "fmt"

func numberOfBeams(bank []string) int {
	rows := []int{}

	for _, row := range bank {
		count := 0

		for _, char := range row {
			if char == '1' {
				count += 1
			}
		}

		if count > 0 {
			rows = append(rows, count)
		}
	}

	result := 0

	for i := 0; i < len(rows)-1; i++ {
		result += rows[i] * rows[i+1]
	}

	return result
}

func main() {
	bank := []string{"011001", "000000", "010100", "001000"}
	fmt.Println(numberOfBeams(bank))
	//Output: 8
	bank = []string{"000", "111", "000"}
	fmt.Println(numberOfBeams(bank))
	//Output: 0
}
