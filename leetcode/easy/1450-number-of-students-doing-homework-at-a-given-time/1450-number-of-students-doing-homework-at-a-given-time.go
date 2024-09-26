/*
1450-number-of-students-doing-homework-at-a-given-time
leetcode/easy/1450. Number of Students Doing Homework at a Given Time
Difficulty: easy
URL: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
*/

package main

import (
	"fmt"
)

func busyStudent(startTime []int, endTime []int, queryTime int) int {
	count := 0

	for i := 0; i < len(startTime); i++ {
		if startTime[i] <= queryTime && endTime[i] >= queryTime {
			count += 1
		}
	}

	return count
}

func main() {
	fmt.Println("hello world")
	fmt.Println(busyStudent([]int{9, 8, 7, 6, 5, 4, 3, 2, 1}, []int{10, 10, 10, 10, 10, 10, 10, 10, 10}, 5))
}
