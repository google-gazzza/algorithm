/*
654-maximum-binary-tree
leetcode/medium/654. Maximum Binary Tree
Difficulty: medium
URL: https://leetcode.com/problems/maximum-binary-tree/
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

func getMaxIndex(nums []int) int {
	max := nums[0]
	maxIndex := 0

	for i := 1; i < len(nums); i++ {
		if nums[i] > max {
			max = nums[i]
			maxIndex = i
		}
	}

	return maxIndex
}

func creteMaximizeBinaryTree(nums []int, treeNode *TreeNode) {
	fmt.Println(nums)

	if len(nums) == 0 {
		treeNode = nil
		fmt.Println("num", nums)
		fmt.Println("treeNode:", treeNode)
		return
	}

	maxIndex := getMaxIndex(nums)
	treeNode.Val = nums[maxIndex]

	left := nums[:maxIndex]
	right := nums[maxIndex+1:]

	if len(left) > 0 {
		treeNode.Left = &TreeNode{}
		creteMaximizeBinaryTree(left, treeNode.Left)
	}

	if len(right) > 0 {
		treeNode.Right = &TreeNode{}
		creteMaximizeBinaryTree(right, treeNode.Right)
	}
}

func constructMaximumBinaryTree(nums []int) *TreeNode {
	head := &TreeNode{
		Left:  nil,
		Right: nil,
	}

	creteMaximizeBinaryTree(nums, head)

	return head
}

// best: https://leetcode.com/problems/maximum-binary-tree/discuss/263633/a-foolish-solution-by-golang-GO-56ms-100
//这只是一个随手的foolish solution，yangwuqi
//56ms，faster than 100%

func constructMaximumBinaryTree(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}
	max := nums[0]
	index := 0
	for i := 0; i < len(nums); i++ {
		if max < nums[i] { //find the biggest, it is the root
			max = nums[i]
			index = i
		}
	}
	left := nums[:index]
	right := nums[index+1:]
	var root TreeNode
	root.Val = max
	root.Left = constructMaximumBinaryTree(left)
	root.Right = constructMaximumBinaryTree(right)
	return &root
}

func main() {
	fmt.Println("hello world")
	fmt.Println(constructMaximumBinaryTree([]int{3, 2, 1, 6, 0, 5}))
}
