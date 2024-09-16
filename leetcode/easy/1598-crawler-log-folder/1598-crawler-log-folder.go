/*
1598-crawler-log-folder
leetcode/easy/1598. Crawler Log Folder
URL: https://leetcode.com/problems/crawler-log-folder/
*/

package main

import "fmt"

func minOperations(logs []string) int {
	depth := 0

	for _, log := range logs {
		if log == "../" {
			if depth > 0 {
				depth--
			}
		} else if log == "./" {
			continue
		} else {
			depth++
		}
	}

	return depth
}

func main() {
	logs := []string{"d1/", "d2/", "../", "d21/", "./"}
	fmt.Println(minOperations(logs))
	//Output: 2

	logs = []string{"d1/", "d2/", "./", "d3/", "../", "d31/"}
	fmt.Println(minOperations(logs))
	//Output: 3

	logs = []string{"d1/", "../", "../", "../"}
	fmt.Println(minOperations(logs))
	//Output: 0
}
