/*
leetcode/medium/2487. Remove Nodes From Linked List
2487-remove-nodes-from-linked-list
uRL: https://leetcode.com/problems/remove-nodes-from-linked-list/description/

*/

package main

//Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNodes(head *ListNode) *ListNode {
	nodes := []ListNode{}

	for head != nil {
		nodes = append(nodes, *head)
		head = head.Next
	}

	maxVal := 0

	candidates := []ListNode{}

	for i := len(nodes) - 1; i >= 0; i-- {
		if nodes[i].Val >= maxVal {
			maxVal = nodes[i].Val
			candidates = append(candidates, nodes[i])
		}
	}

	for i := len(candidates) - 1; i > 0; i-- {
		candidates[i].Next = &candidates[i-1]
	}

	return &candidates[len(candidates)-1]
}

//func main() {
//}
