/*
leetcode/medium/1325. Delete Leaves With a Given Value
1325-delete-leaves-with-a-given-value
uRL: https://leetcode.com/problems/delete-leaves-with-a-given-value/description/

*/

package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isTargetLeaf(node *TreeNode, targetVal int) bool {
	if node == nil {
		return false
	}

	if node.Left == nil && node.Right == nil && node.Val == targetVal {
		return true
	}

	return false
}

func removeLeafNodes(root *TreeNode, target int) *TreeNode {
	queueList := [][]*TreeNode{{root}}
	queue := []*TreeNode{root}
	nextQueue := []*TreeNode{}

	for len(queue) > 0 {
		for _, node := range queue {
			if node.Left != nil {
				nextQueue = append(nextQueue, node.Left)
			}

			if node.Right != nil {
				nextQueue = append(nextQueue, node.Right)
			}
		}

		queueList = append(queueList, nextQueue)
		queue = nextQueue
		nextQueue = []*TreeNode{}
	}

	for i := len(queueList) - 1; i >= 0; i-- {
		for _, node := range queueList[i] {
			if isTargetLeaf(node.Left, target) {
				node.Left = nil
			}

			if isTargetLeaf(node.Right, target) {
				node.Right = nil
			}
		}
	}

	if isTargetLeaf(root, target) {
		return nil
	}

	return root
}
