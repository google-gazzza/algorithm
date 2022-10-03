/*
2073-time-needed-to-buy-tickets
leetcode/easy/2073. Time Needed to Buy Tickets
URL: https://leetcode.com/problems/time-needed-to-buy-tickets/
*/

package main

import "fmt"

func timeRequiredToBuy(tickets []int, k int) int {
	time := 0
	i := 0

	for {
		mod := i % len(tickets)

		if tickets[mod] > 0 {
			tickets[mod]--
			time++
		}

		if mod == k {
			if tickets[k] == 0 {
				break
			}
		}

		i++
	}

	return time
}

func main() {
	tickets := []int{2, 3, 2}
	k := 2
	fmt.Println("%v", timeRequiredToBuy(tickets, k))
	//Output: 6

	tickets = []int{5, 1, 1, 1}
	k = 0
	fmt.Println("%v", timeRequiredToBuy(tickets, k))
	//Output: 8
}