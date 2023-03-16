/*
leetcode/easy/2578. Split With Minimum Sum
2578-split-with-minimum-sum
uRL: https://leetcode.com/problems/split-with-minimum-sum/description/

*/

package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

func strArrayToNumArray(strArray []string) []int {
	numArray := []int{}

	for _, str := range strArray {
		num, _ := strconv.Atoi(str)
		numArray = append(numArray, num)
	}

	return numArray
}

func numArrayToStrArray(numArray []int) []string {
	strArray := []string{}

	for _, num := range numArray {
		str := strconv.Itoa(num)
		strArray = append(strArray, str)
	}

	return strArray
}

func splitNum(num int) int {
	numA := ""
	numB := ""

	digitStr := strconv.Itoa(num)
	digits := strings.Split(digitStr, "")
	numArray := strArrayToNumArray(digits)

	sort.Ints(numArray)

	digits = numArrayToStrArray(numArray)

	for i := 0; i < len(digits); i++ {
		if i%2 == 0 {
			numA += digits[i]
		} else {
			numB += digits[i]
		}
	}

	numAInt, _ := strconv.Atoi(numA)
	numBInt, _ := strconv.Atoi(numB)

	return numAInt + numBInt
}

func main() {
	num := 4325
	fmt.Println(splitNum(num))
	//Output: 59

	num = 687
	fmt.Println(splitNum(num))
	//Output: 75
}
