/*
40-combination-sum-ii
leetcode/medium/40. Combination Sum II
URL: https://leetcode.com/problems/combination-sum-ii/
*/

package main

import (
	"fmt"
	"sort"
)

func backtrack(candidates []int, target int, index int, path []int, result *[][]int) {
	if target == 0 {
		*result = append(*result, path)
	}
	if target < 0 {
		return
	}

	for i := index; i < len(candidates); i++ {
		if i > index && candidates[i] == candidates[i-1] {
			continue
		}

		new_path := []int{candidates[i]}
		new_path = append(new_path, path...)

		backtrack(
			candidates,
			target-candidates[i],
			i+1,
			new_path,
			result,
		)
	}
}

func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	var result [][]int

	backtrack(candidates, target, 0, []int{}, &result)

	return result
}

func main() {
	candidates := []int{10, 1, 2, 7, 6, 1, 5}
	target := 8
	fmt.Println(combinationSum2(candidates, target))
	//	Output:
	//	[
	//	[1,1,6],
	//	[1,2,5],
	//	[1,7],
	//	[2,6]
	//]

	candidates = []int{3, 1, 3, 5, 1, 1}
	target = 8
	fmt.Println(combinationSum2(candidates, target))
	//[[1,1,1,5],[1,1,3,3],[3,5]]

	candidates = []int{2, 5, 2, 1, 2}
	target = 5
	fmt.Println(combinationSum2(candidates, target))
	//Output:
	//	[
	//	[1,2,2],
	//[5]
}
