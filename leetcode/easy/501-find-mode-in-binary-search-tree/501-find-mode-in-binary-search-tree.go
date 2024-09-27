/*
leetcode/easy/501. Find Mode in Binary Search Tree
501-find-mode-in-binary-search-tree
uRL: https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
*/

package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findMaxMode(countMap map[int]int, maxCount int) []int {
	result := make([]int, 0)

	for k, v := range countMap {
		if v == maxCount {
			result = append(result, k)
		}
	}

	return result
}

func findMode(root *TreeNode) []int {
	countMap := make(map[int]int)
	maxCount := 0

	var dfs func(*TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}

		countMap[node.Val]++
		if countMap[node.Val] > maxCount {
			maxCount = countMap[node.Val]
		}

		dfs(node.Left)
		dfs(node.Right)
	}

	dfs(root)

	return findMaxMode(countMap, maxCount)
}

func main() {
}
