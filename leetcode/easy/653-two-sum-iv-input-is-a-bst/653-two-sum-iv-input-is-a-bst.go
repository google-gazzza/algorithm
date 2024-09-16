/*
leetcode/easy/653. Two Sum IV - Input is a BST
653-two-sum-iv-input-is-a-bst
uRL: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
*/

package main

import (
	"fmt"
)

//Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findTarget(root *TreeNode, k int) bool {
	values := make(map[int]bool)

	var bst func(*TreeNode) bool

	bst = func(node *TreeNode) bool {
		if node == nil {
			return false
		}

		if values[k-node.Val] {
			return true
		}

		values[node.Val] = true

		return bst(node.Left) || bst(node.Right)
	}

	return bst(root)
}

func main() {
}
