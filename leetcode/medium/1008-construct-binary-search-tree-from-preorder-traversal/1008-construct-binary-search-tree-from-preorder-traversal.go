/*
1008-construct-binary-search-tree-from-preorder-traversal
leetcode/medium/1008. Construct Binary Search Tree from Preorder Traversal
URL: https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/

NOTE: Explanation
*/

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func preorderTraversal(root *TreeNode, preorder []int, index *int) {
	if root == nil {
		return
	}

	if *index < len(preorder) && preorder[*index] < root.Val {
		root.Left = &TreeNode{Val: preorder[*index]}
		*index++
		preorderTraversal(root.Left, preorder, index)
	}
}

func insertElementToExistTree(root *TreeNode, val int) {
	if root.Val < val {
		if root.Right == nil {
			root.Right = &TreeNode{Val: val}
			return
		} else {
			insertElementToExistTree(root.Right, val)
		}
	} else {
		if root.Left == nil {
			root.Left = &TreeNode{Val: val}
			return
		} else {
			insertElementToExistTree(root.Left, val)
		}
	}
}

func bstFromPreorder(preorder []int) *TreeNode {
	root := &TreeNode{Val: preorder[0]}
	index := 1

	preorderTraversal(root, preorder, &index)

	for index < len(preorder) {
		insertElementToExistTree(root, preorder[index])
		index++
	}

	return root
}

func main() {
	preorder := []int{8, 5, 1, 7, 10, 12}
	fmt.Println(bstFromPreorder(preorder))
	//Output: [8,5,10,1,7,null,12]

	preorder = []int{1, 3}

	fmt.Println(bstFromPreorder(preorder))
	//Output: [1,null,3]
}
