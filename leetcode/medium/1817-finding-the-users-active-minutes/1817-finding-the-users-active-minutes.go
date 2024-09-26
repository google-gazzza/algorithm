/*
1817-finding-the-users-active-minutes
leetcode/medium/1817. Finding the Users Active Minutes
URL: https://leetcode.com/problems/finding-the-users-active-minutes/description/

NOTE: Explanation
*/

package main

import (
	"fmt"
)

func findingUsersActiveMinutes(logs [][]int, k int) []int {
	uniqUserMinutesMap := make(map[int]map[int]bool)

	for _, log := range logs {
		userID := log[0]
		minute := log[1]

		if _, ok := uniqUserMinutesMap[userID]; !ok {
			uniqUserMinutesMap[userID] = make(map[int]bool)
		}

		uniqUserMinutesMap[userID][minute] = true
	}

	result := make([]int, k)

	for _, uniqUserMinutes := range uniqUserMinutesMap {
		result[len(uniqUserMinutes)-1]++
	}

	return result
}

func main() {
	logs := [][]int{{0, 5}, {1, 2}, {0, 2}, {0, 5}, {1, 3}}
	k := 5
	fmt.Println(findingUsersActiveMinutes(logs, k))
	//Output: [0,2,0,0,0]

	logs = [][]int{{1, 1}, {2, 2}, {2, 3}}
	k = 4
	fmt.Println(findingUsersActiveMinutes(logs, k))
	//Output: [1,1,0,0]

	logs = [][]int{{305589003, 4136}, {305589004, 4139}, {305589004, 4141}, {305589004, 4137}, {305589001, 4139}, {305589001, 4139}}
	k = 6
	fmt.Println(findingUsersActiveMinutes(logs, k))
	//[2,0,1,0,0,0]
}
