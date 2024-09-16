/*
47-permutations-ii
leetcode/medium/47. Permutations II
URL: https://leetcode.com/problems/permutations-ii/

NOTE: Explanation
*/

package main

import "fmt"

func permutation2(nums []int, path []int, resultMap *map[string]bool, result *[][]int) {
	if len(nums) == 0 {
		if _, ok := (*resultMap)[fmt.Sprint(path)]; !ok {
			*result = append(*result, path)
			(*resultMap)[fmt.Sprint(path)] = true
		}
		return
	}

	for i, n := range nums {
		newPath := []int{}
		newPath = append(newPath, path...)
		newPath = append(newPath, n)

		newNums := []int{}
		newNums = append(newNums, nums[:i]...)
		newNums = append(newNums, nums[i+1:]...)

		permutation2(newNums, newPath, resultMap, result)
	}
}

func permuteUnique(nums []int) [][]int {
	result := [][]int{}
	resultMap := map[string]bool{}

	permutation2(nums, []int{}, &resultMap, &result)

	return result
}

func main() {
	nums := []int{1, 1, 2}
	fmt.Println(permuteUnique(nums))
	//Output:
	//[[1,1,2],
	//[1,2,1],
	//[2,1,1]]
	nums = []int{1, 2, 3}
	fmt.Println(permuteUnique(nums))
	//Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
}
