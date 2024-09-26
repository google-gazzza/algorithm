/*
leetcode/easy/1576. Replace All ?'s to Avoid Consecutive Repeating Characters
1576-replace-all-?-s-to-avoid-consecutive-repeating-characters
uRL: https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/description/
*/

package main

import "fmt"

func modifyString(s string) string {
	if len(s) == 0 {
		return s
	}

	// Convert the string to a slice of runes to handle UTF-8 characters properly.
	runes := []rune(s)

	for i := 0; i < len(runes); i++ {
		if runes[i] == '?' {
			for j := 'a'; j <= 'z'; j++ {
				if (i == 0 || runes[i-1] != j) && (i == len(runes)-1 || runes[i+1] != j) {
					runes[i] = j
					break
				}
			}
		}
	}

	return string(runes)
}

func main() {
	s := "?zs"
	fmt.Println(modifyString(s))
	//Output: "azs"

	s = "ubv?w"
	fmt.Println(modifyString(s))
	//Output: "ubvaw"
}
