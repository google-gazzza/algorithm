/*
leetcode/easy/1128. Number of Equivalent Domino Pairs
1128-number-of-equivalent-domino-pairs
uRL: https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/
*/

package main

import (
	"fmt"
	"sort"
)

func numEquivDominoPairs(dominoes [][]int) int {
	for _, v := range dominoes {
		sort.Ints(v)
	}

	count := 0

	for i := 0; i < len(dominoes); i++ {
		for j := i + 1; j < len(dominoes); j++ {
			if dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1] {
				count++
			}
		}
	}

	return count
}

func main() {
	dominoes := [][]int{{1, 2}, {2, 1}, {3, 4}, {5, 6}}
	fmt.Println(numEquivDominoPairs(dominoes))

	dominoes = [][]int{{1, 2}, {2, 1}, {1, 1}, {1, 2}, {2, 2}}
	fmt.Println(numEquivDominoPairs(dominoes))
}
