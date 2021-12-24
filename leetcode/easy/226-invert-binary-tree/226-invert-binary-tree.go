/*
226-invert-binary-tree
leetcode/easy/226. Invert Binary Tree
Difficulty: easy
URL: https://leetcode.com/problems/invert-binary-tree/
*/

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inversion(root *TreeNode, copyTree *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	if copyTree == nil {
		copyTree = &TreeNode{}
	}

	copyTree.Val = root.Val

	if root.Left != nil {
		copyTree.Right = inversion(root.Left, copyTree.Right)
	}

	if root.Right != nil {
		copyTree.Left = inversion(root.Right, copyTree.Left)
	}

	return copyTree
}

func invertTree(root *TreeNode) *TreeNode {
	return inversion(root, nil)
}