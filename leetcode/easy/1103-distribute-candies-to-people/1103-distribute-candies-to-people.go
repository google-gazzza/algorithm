/*
leetcode/easy/1103. Distribute Candies to People
1103-distribute-candies-to-people
uRL: https://leetcode.com/problems/distribute-candies-to-people/description/

*/

package main

import "fmt"

func distributeCandies(candies int, num_people int) []int {
	count := 1
	result := make([]int, num_people)
	index := 0

	for candies > 0 {
		if candies >= count {
			result[index%num_people] += count
			candies -= count
		} else {
			result[index%num_people] += candies
			candies = 0
		}

		index++
		count++
	}

	return result
}

func main() {
	candies := 7
	num_people := 4
	fmt.Println(distributeCandies(candies, num_people))
	//Output: [1,2,3,1]

	candies = 10
	num_people = 3
	fmt.Println(distributeCandies(candies, num_people))
	//Output: [5,2,3]
}
