/*
590-n-ary-tree-postorder-traversal
leetcode/easy/590. N-ary Tree Postorder Traversal
Difficulty: easy
URL: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
*/

package main

import (
	"fmt"
)

/**
 * Definition for a Node.

 */

type Node struct {
	Val      int
	Children []*Node
}

func postorder(root *Node) []int {
	if root == nil {
		return nil
	}

	var res []int

	for _, child := range root.Children {
		res = append(res, postorder(child)...)
	}

	res = append(res, root.Val)

	return res
}

func main() {
	fmt.Println("hello world")
}
