/*
leetcode/medium/791. Custom Sort String
791-custom-sort-string
uRL: https://leetcode.com/problems/custom-sort-string/description/
*/

package main

import (
	"fmt"
	"strings"
)

func customSort(order string, originalAlphabet string) string {
	result := ""

	for _, c := range order {
		for _, o := range originalAlphabet {
			if c == o {
				result += string(c)
			}

		}
	}
	return result
}

func generateOrder(order string) string {
	originalAlphabet := "abcdefghijklmnopqrstuvwxyz"
	newOrderAlphabet := order

	for _, c := range originalAlphabet {
		if !strings.Contains(order, string(c)) {
			newOrderAlphabet += string(c)
		}
	}

	return newOrderAlphabet
}

func customSortString(order string, s string) string {
	newOrderAlphabet := generateOrder(order)
	newOrder := customSort(newOrderAlphabet, s)

	return newOrder
}

func main() {
	order := "cba"
	s := "abcd"
	fmt.Println(customSortString(order, s))
	//Output: "cbad"

	order = "cbafg"
	s = "abcd"
	fmt.Println(customSortString(order, s))
	//Output: "cbad"
}
