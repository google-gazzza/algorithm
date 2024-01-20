/*
//leetcode/easy/456. 132 Pattern
//456-132-pattern
//uRL: https://leetcode.com/problems/132-pattern/description/

codewars/6kyu/Pair of gloves
pair-of-gloves
URL: https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/go

*/

package main

import "fmt"

func NumberOfPairs(gloves []string) int {
	countMap := make(map[string]int)

	for _, glove := range gloves {
		countMap[glove]++
	}

	result := 0

	for _, count := range countMap {
		result += count / 2
	}

	return result
}

func main() {
	input := []string{"red", "green", "red", "blue", "blue"}
	fmt.Println(NumberOfPairs(input))
	//result = 2 (1 red pair + 1 blue pair)

	input = []string{"red", "red", "red", "red", "red", "red"}
	fmt.Println(NumberOfPairs(input))
	//result = 3 (3 red pairs)
}
