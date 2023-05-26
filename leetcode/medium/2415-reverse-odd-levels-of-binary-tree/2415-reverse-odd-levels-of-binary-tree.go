/*
leetcode/medium/2415. Reverse Odd Levels of Binary Tree
2415-reverse-odd-levels-of-binary-tree
uRL: https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/description/

*/

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func reverseList(list []*TreeNode) {
	for i, j := 0, len(list)-1; i < j; i, j = i+1, j-1 {
		list[i], list[j] = list[j], list[i]
	}
}

func reverseOddLevels(root *TreeNode) *TreeNode {
	currentQueue := []*TreeNode{root}
	nextQueue := []*TreeNode{}
	queues := [][]*TreeNode{{root}}
	level := 0

	for len(currentQueue) > 0 {
		for _, node := range currentQueue {
			if node.Left != nil {
				nextQueue = append(nextQueue, node.Left)
			}
			if node.Right != nil {
				nextQueue = append(nextQueue, node.Right)
			}
		}

		queues = append(queues, nextQueue)
		currentQueue = nextQueue
		nextQueue = []*TreeNode{}
		level++
	}

	for i := 0; i < len(queues)-1; i++ {
		if i%2 == 0 {
			reverseList(queues[i+1])
		}

		for j := 0; j < len(queues[i]); j += 1 {
			fmt.Println(queues[i])
			queues[i][j].Left = queues[i+1][j*2]
			queues[i][j].Right = queues[i+1][j*2+1]
		}
	}

	return root
}

func main() {
	//num := 4325
	//fmt.Println(splitNum(num))
	////Output: 59
	//
	//num = 687
	//fmt.Println(splitNum(num))
	////Output: 75
}
