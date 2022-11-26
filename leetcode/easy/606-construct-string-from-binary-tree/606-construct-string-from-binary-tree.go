/*
606-construct-string-from-binary-tree
leetcode/easy/606. Construct String from Binary Tree
URL: https://leetcode.com/problems/construct-string-from-binary-tree/

NOTE: Explanation
*/

package main

import (
	"strconv"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func dfs(node *TreeNode, result *string) {
	if node == nil {
		return
	}

	*result += strconv.Itoa(node.Val)

	if node.Left == nil && node.Right != nil {
		*result += "("
		*result += ")"
		*result += "("
		dfs(node.Right, result)
		*result += ")"
	}

	if node.Left != nil {
		*result += "("
		dfs(node.Left, result)
		*result += ")"

		if node.Right != nil {
			*result += "("
			dfs(node.Right, result)
			*result += ")"
		}
	}
}

func tree2str(root *TreeNode) string {
	result := ""

	dfs(root, &result)

	return result
}

func main() {
}
