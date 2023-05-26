/*
589-n-ary-tree-preorder-traversal
leetcode/easy/589. N-ary Tree Preorder Traversal
Difficulty: easy
URL: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
*/

package main

import "fmt"

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */
type Node struct {
	Val      int
	Children []*Node
}

var result []int

func preorderTraversal(root *Node) {
	if root == nil {
		return
	}
	result = append(result, root.Val)

	for _, child := range root.Children {
		preorderTraversal(child)
	}
}

func preorder(root *Node) []int {
	result = []int{}
	preorderTraversal(root)

	return result
}

func main() {
	fmt.Println("hello world")

	nums1 := []int{34, 23, 1, 24, 75, 33, 54, 8}
}
