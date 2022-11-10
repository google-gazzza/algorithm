/*
39-combination-sum
leetcode/medium/39. Combination Sum
URL: https://leetcode.com/problems/combination-sum/
*/

package main

import (
	"fmt"
	"sort"
)

func backtrack(candidates []int, target int, path []int, result *[][]int, resultSet *map[string]bool) {
	if target < 0 {
		return
	}

	if target == 0 {
		sort.Ints(path)
		key := fmt.Sprintf("%v", path)

		if _, ok := (*resultSet)[key]; !ok {
			*result = append(*result, path)
			(*resultSet)[key] = true
		}
		return
	}

	for i := len(candidates) - 1; i >= 0; i-- {
		new_path := append([]int{candidates[i]}, path...)
		backtrack(candidates, target-candidates[i], new_path, result, resultSet)
	}
}

func combinationSum(candidates []int, target int) [][]int {
	sort.Ints(candidates)

	var result [][]int
	var path []int
	var resultSet = make(map[string]bool)

	backtrack(candidates, target, path, &result, &resultSet)

	return result
}

func main() {
	candidates := []int{2, 3, 6, 7}
	target := 7
	//fmt.Println(combinationSum(candidates, target))
	//Output: [[2, 2, 3], [7]]

	candidates = []int{2, 3, 5}
	target = 8
	//fmt.Println(combinationSum(candidates, target))
	//Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

	candidates = []int{2}
	target = 1
	//fmt.Println(combinationSum(candidates, target))
	//Output: []

	candidates = []int{7, 3, 2}
	target = 18
	fmt.Println(combinationSum(candidates, target))
	//[[7,7,2,2],[7,3,3,3,2],[7,3,2,2,2,2],[3,3,3,3,3,3],[3,3,3,3,2,2,2],[3,3,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2]]
}
