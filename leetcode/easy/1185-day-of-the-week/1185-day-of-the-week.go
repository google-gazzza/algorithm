/*
leetcode/easy/1185. Day of the Week
1185-day-of-the-week
uRL: https://leetcode.com/problems/day-of-the-week/description/
*/

package main

import (
	"fmt"
	"time"
)

func dayOfTheWeek(day int, month int, year int) string {
	return time.Date(year, time.Month(month), day, 0, 0, 0, 0, time.UTC).Weekday().String()
}

func main() {
	day := 31
	month := 8
	year := 2019
	fmt.Println(dayOfTheWeek(day, month, year))
	//Output: "Saturday"

	day = 18
	month = 7
	year = 1999
	fmt.Println(dayOfTheWeek(day, month, year))
	//Output: "Sunday"

	day = 15
	month = 8
	year = 1993
	fmt.Println(dayOfTheWeek(day, month, year))
	//Output: "Sunday"
}
