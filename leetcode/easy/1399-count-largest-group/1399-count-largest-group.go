/*
1399-count-largest-group
leetcode/easy/1399. Count Largest Group
URL: https://leetcode.com/problems/count-largest-group/description/

NOTE: Explanation
*/

package main

import "fmt"

func sumDigits(n int) int {
	sum := 0

	for n > 0 {
		sum += n % 10
		n /= 10
	}

	return sum
}

func countLargestGroup(n int) int {
	hashTable := make(map[int]int)
	max := 0

	for i := 1; i <= n; i++ {
		sum := sumDigits(i)
		hashTable[sum]++

		if hashTable[sum] > max {
			max = hashTable[sum]
		}
	}

	count := 0

	for _, v := range hashTable {
		if v == max {
			count++
		}
	}

	return count
}

func main() {
	n := 13
	fmt.Println(countLargestGroup(n))
	//Output: 4

	n = 2
	fmt.Println(countLargestGroup(n))
}
