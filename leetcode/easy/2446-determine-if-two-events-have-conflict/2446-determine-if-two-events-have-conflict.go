/*
2446-determine-if-two-events-have-conflict
leetcode/easy/2446. Determine if Two Events Have Conflict
URL: https://leetcode.com/problems/determine-if-two-events-have-conflict/
*/

package main

import (
	"fmt"
	"strconv"
)

func timeToNum(time string) int {
	hour := time[:2]
	minute := time[3:]
	hh, _ := strconv.Atoi(hour)
	mm, _ := strconv.Atoi(minute)

	return hh*60 + mm
}

func isOverlap(event1 []int, event2 []int) bool {
	return event2[0] <= event1[1] && event1[0] <= event2[1]
}

func haveConflict(event1 []string, event2 []string) bool {
	event1Start := timeToNum(event1[0])
	event1End := timeToNum(event1[1])
	event2Start := timeToNum(event2[0])
	event2End := timeToNum(event2[1])

	event1Range := []int{event1Start, event1End}
	event2Range := []int{event2Start, event2End}

	return isOverlap(event1Range, event2Range) || isOverlap(event2Range, event1Range)
}

func main() {
	event1 := []string{"01:15", "02:00"}
	event2 := []string{"02:00", "03:00"}
	fmt.Println(haveConflict(event1, event2))
	//Output: true

	event1 = []string{"01:00", "02:00"}
	event2 = []string{"01:20", "03:00"}
	fmt.Println(haveConflict(event1, event2))
	//Output: true

	event1 = []string{"10:00", "11:00"}
	event2 = []string{"14:00", "15:00"}
	fmt.Println(haveConflict(event1, event2))
	//Output: false
}
