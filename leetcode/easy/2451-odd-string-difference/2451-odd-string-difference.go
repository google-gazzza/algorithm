/*
2451-odd-string-difference
leetcode/easy/2451. Odd String Difference
URL: https://leetcode.com/problems/odd-string-difference/
*/

package main

import (
	"fmt"
	"strconv"
)

func castingIntArrToString(arr []int) string {
	str := ""

	for _, v := range arr {
		str += strconv.Itoa(v)
	}

	return str
}

func oddString(words []string) string {
	alphabet := map[string]int{
		"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6,
		"h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13,
		"o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20,
		"v": 21, "w": 22, "x": 23, "y": 24, "z": 25,
	}

	difference := []string{}
	differenceMap := map[string]int{}

	for _, word := range words {
		temp := []int{}

		for i := 1; i < len(word); i++ {
			temp = append(temp, alphabet[string(word[i])]-alphabet[string(word[i-1])])
		}

		difference = append(difference, castingIntArrToString(temp))
		differenceMap[castingIntArrToString(temp)]++
	}

	for i, v := range difference {
		if differenceMap[v] == 1 {
			return words[i]
		}
	}

	fmt.Println(difference)

	return words[len(words)-1]
}

func main() {
	words := []string{"adc", "wzy", "abc"}
	//fmt.Println(oddString(words))
	//Output: "abc"

	words = []string{"aaa", "bob", "ccc", "ddd"}
	//fmt.Println(oddString(words))
	//Output: "bob"

	words = []string{"abm", "bcn", "alm"}
	fmt.Println(oddString(words))
	// "alm"
}
