/*
2409-count-days-spent-together
leetcode/easy/2409. Count Days Spent Together
URL: https://leetcode.com/problems/count-days-spent-together/
*/

package main

import (
	"fmt"
	"strconv"
	"strings"
)

var monthDays = []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}

func monthToDays(month int) int {
	sum := 0

	for i := 0; i < month-1; i++ {
		sum += monthDays[i]

	}

	return sum
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func countDaysTogether(arriveAlice string, leaveAlice string, arriveBob string, leaveBob string) int {
	aliceA := strings.Split(arriveAlice, "-")
	aliceAMonth, _ := strconv.Atoi(aliceA[0])
	aliceADay, _ := strconv.Atoi(aliceA[1])
	aliceADays := monthToDays(aliceAMonth) + aliceADay

	aliceL := strings.Split(leaveAlice, "-")
	aliceLMonth, _ := strconv.Atoi(aliceL[0])
	aliceLDay, _ := strconv.Atoi(aliceL[1])
	aliceLDays := monthToDays(aliceLMonth) + aliceLDay

	bobA := strings.Split(arriveBob, "-")
	bobAMonth, _ := strconv.Atoi(bobA[0])
	bobADay, _ := strconv.Atoi(bobA[1])
	bobADays := monthToDays(bobAMonth) + bobADay
	bobL := strings.Split(leaveBob, "-")
	bobLMonth, _ := strconv.Atoi(bobL[0])
	bobLDay, _ := strconv.Atoi(bobL[1])
	bobLDays := monthToDays(bobLMonth) + bobLDay

	if (bobADays <= aliceADays && aliceADays <= bobLDays) ||
		(bobADays <= aliceLDays && aliceLDays <= bobLDays) ||
		(aliceADays <= bobADays && bobADays <= aliceLDays) ||
		(aliceADays <= bobLDays && bobLDays <= aliceLDays) {
		return min(aliceLDays, bobLDays) - max(aliceADays, bobADays) + 1
	}

	return 0
}

func main() {
	arriveAlice := "08-15"
	leaveAlice := "08-18"
	arriveBob := "08-16"
	leaveBob := "08-19"
	fmt.Println(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob))
	// Output: 3

	arriveAlice = "10-01"
	leaveAlice = "10-31"
	arriveBob = "11-01"
	leaveBob = "12-31"
	fmt.Println(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob))
	//Output: 0

	arriveAlice = "04-22"
	leaveAlice = "12-31"
	arriveBob = "12-02"
	leaveBob = "12-14"
	fmt.Println(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob))
	//13

	fmt.Println(countDaysTogether("01-01", "12-31", "01-01", "12-31"))
	//365
}
