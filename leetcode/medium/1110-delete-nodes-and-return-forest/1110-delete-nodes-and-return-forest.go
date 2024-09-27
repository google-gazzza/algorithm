/*
leetcode/medium/1110. Delete Nodes And Return Forest
1110-delete-nodes-and-return-forest
uRL: https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/565936/golang-simple-dfs/
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

func delNodes(root *TreeNode, to_delete []int) []*TreeNode {
	queue := []*TreeNode{}
	queue = append(queue, root)

	var dfs func(node *TreeNode, target int)

	dfs = func(node *TreeNode, target int) {
		if node == nil {
			return
		}

		if node.Left != nil {
			if node.Left.Val == target {
				queue = append(queue, node.Left.Left)
				queue = append(queue, node.Left.Right)
				node.Left = nil
			} else {
				dfs(node.Left, target)
			}
		}

		if node.Right != nil {
			if node.Right.Val == target {
				queue = append(queue, node.Right.Left)
				queue = append(queue, node.Right.Right)
				node.Right = nil
			} else {
				dfs(node.Right, target)
			}
		}
	}

	for _, v := range to_delete {
		for i := 0; i < len(queue); i++ {
			node := queue[i]

			if node == nil {
				queue = append(queue[:i], queue[i+1:]...)
				i--
				continue
			}

			if node.Val == v {
				queue = append(queue, node.Left, node.Right)
				queue = append(queue[:i], queue[i+1:]...)
				i--
				break
			}

			dfs(node, v)
		}
	}

	filteredResult := []*TreeNode{}

	for _, node := range queue {
		if node != nil {
			filteredResult = append(filteredResult, node)
		}
	}

	return filteredResult
}

func main() {
}
