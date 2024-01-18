/*
leetcode/easy/993. Cousins in Binary Tree
993-cousins-in-binary-tree
uRL: https://leetcode.com/problems/cousins-in-binary-tree/description/
*/

package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isCousins(root *TreeNode, x int, y int) bool {
	if root == nil {
		return false
	}

	queue := []*TreeNode{root}
	nextQueue := []*TreeNode{}

	for len(queue) > 0 {
		hasX := false
		hasY := false

		for _, node := range queue {
			if node.Left != nil {
				nextQueue = append(nextQueue, node.Left)
			}
			if node.Right != nil {
				nextQueue = append(nextQueue, node.Right)
			}

			if node.Left != nil && node.Right != nil {
				if (node.Left.Val == x && node.Right.Val == y) || (node.Left.Val == y && node.Right.Val == x) {
					return false
				}
			}

			if node.Val == x {
				hasX = true
			}

			if node.Val == y {
				hasY = true
			}

			if hasX && hasY {
				return true
			}
		}

		queue = nextQueue
		nextQueue = []*TreeNode{}
	}

	return false
}

func main() {

}
