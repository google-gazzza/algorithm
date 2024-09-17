/*
1629-slowest-key
leetcode/easy/1629. Slowest Key
URL: https://leetcode.com/problems/slowest-key/
*/

package main

import (
	"fmt"
)

func slowestKey(releaseTimes []int, keysPressed string) byte {
	longestTime := releaseTimes[0]
	longestKey := keysPressed[0]

	for i := 1; i < len(releaseTimes); i++ {
		time := releaseTimes[i] - releaseTimes[i-1]

		if time < longestTime {
			continue
		}

		if time == longestTime {
			if keysPressed[i] > longestKey {
				longestKey = keysPressed[i]
			}
		} else {
			longestTime = releaseTimes[i] - releaseTimes[i-1]
			longestKey = keysPressed[i]
		}
	}

	return longestKey
}

func main() {
	releaseTimes := []int{9, 29, 49, 50}
	keysPressed := "cbcd"
	//Output: "c"
	//fmt.Println(slowestKey(releaseTimes, keysPressed))

	releaseTimes = []int{12, 23, 36, 46, 62}
	keysPressed = "spuda"
	//Output: "a"
	//fmt.Println(slowestKey(releaseTimes, keysPressed))

	releaseTimes = []int{1, 2}
	keysPressed = "ba"
	fmt.Println(slowestKey(releaseTimes, keysPressed))
}
