/*
897-increasing-order-search-tree
leetcode/easy/897. Increasing Order Search Tree
1742. Maximum Number of Balls in a Box
Difficulty: easy
URL: https://leetcode.com/problems/increasing-order-search-tree/
*/

package main

import (
	"fmt"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderCopy(root *TreeNode) []int {
	if root == nil {
		return nil
	}

	if root.Left == nil && root.Right == nil {
		return []int{root.Val}
	}

	return append(append(inorderCopy(root.Left), root.Val), inorderCopy(root.Right)...)
}

func increasingBST(root *TreeNode) *TreeNode {
	newNodeHead := &TreeNode{}
	newNodeCursor := newNodeHead
	sortedResult := inorderCopy(root)

	for _, val := range sortedResult {
		newNodeCursor.Right = &TreeNode{Val: val}
		newNodeCursor = newNodeCursor.Right
	}

	return newNodeHead.Right
}

func main() {
	fmt.Println("hello world")
}
