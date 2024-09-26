/*
563-binary-tree-tilt
leetcode/easy/563. Binary Tree Tilt
URL: https://leetcode.com/problems/binary-tree-tilt/

NOTE: Explanation
*/

package main

import (
	"fmt"
	"math"
)

/**
* Definition for a binary tree node.
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func dfs(root *TreeNode, diffSum *int) int {
	if root == nil {
		return 0
	}

	leftSum := dfs(root.Left, diffSum)
	rightSum := dfs(root.Right, diffSum)
	sum := root.Val + leftSum + rightSum
	diff := int(math.Abs(float64(leftSum - rightSum)))
	root.Val = diff
	*diffSum += diff

	return sum
}

func findTilt(root *TreeNode) int {
	diffSum := 0

	dfs(root, &diffSum)

	return diffSum
}

func main() {
	tree1 := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
		},
		Right: &TreeNode{
			Val: 3,
		},
	}

	fmt.Println(findTilt(tree1))

	tree2 := &TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 3,
			},
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 9,
			Right: &TreeNode{
				Val: 7,
			},
		},
	}

	fmt.Println(findTilt(tree2))
}
