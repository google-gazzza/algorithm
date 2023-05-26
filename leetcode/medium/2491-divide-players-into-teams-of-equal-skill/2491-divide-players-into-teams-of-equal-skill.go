/*
leetcode/medium/2491. Divide Players Into Teams of Equal Skill
2491-divide-players-into-teams-of-equal-skill
uRL: https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description/

*/

package main

import (
	"fmt"
	"sort"
)

func dividePlayers(skill []int) int64 {
	sort.Ints(skill)
	result := int64(0)
	combinations := make(map[int64]int)

	for i := 0; i < len(skill)/2; i++ {
		combinations[int64(skill[i])+int64(skill[len(skill)-i-1])]++

		if len(combinations) > 1 {
			return -1
		}

		result += int64(skill[i]) * int64(skill[len(skill)-i-1])
	}

	return result
}

func main() {
	skill := []int{3, 2, 5, 1, 3, 4}
	fmt.Println(dividePlayers(skill))
	//Output: 22

	skill = []int{3, 4}
	fmt.Println(dividePlayers(skill))
	//Output: 12

	skill = []int{1, 1, 2, 3}
	fmt.Println(dividePlayers(skill))
	//Output: -1
}
