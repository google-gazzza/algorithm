/*
leetcode/medium/328. Odd Even Linked List
328-odd-even-linked-list
uRL: https://leetcode.com/problems/odd-even-linked-list/description/

*/

package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func oddEvenList(head *ListNode) *ListNode {
	oddNodes := make([]*ListNode, 0)
	evenNodes := make([]*ListNode, 0)

	currentNode := head
	for currentNode != nil {
		oddNodes = append(oddNodes, currentNode)
		currentNode = currentNode.Next
		if currentNode != nil {
			evenNodes = append(evenNodes, currentNode)
			currentNode = currentNode.Next
		}
	}

	for i := 0; i < len(evenNodes); i++ {
		oddNodes = append(oddNodes, evenNodes[i])
	}

	for i := 0; i < len(oddNodes)-1; i++ {
		oddNodes[i].Next = oddNodes[i+1]
	}

	if len(oddNodes) > 0 {
		oddNodes[len(oddNodes)-1].Next = nil
		return oddNodes[0]
	}

	return nil
}
