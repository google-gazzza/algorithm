/*
leetcode/medium/92. Reverse Linked List II
92-reverse-linked-list-ii
uRL: https://leetcode.com/problems/reverse-linked-list-ii/description/
*/

package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	nodes := []*ListNode{}

	cursor := head

	for cursor != nil {
		nodes = append(nodes, cursor)
		cursor = cursor.Next
	}

	result := []*ListNode{}

	for i := 0; i < left-1; i++ {
		result = append(result, nodes[i])
	}

	reversedRange := []*ListNode{}

	for i := right - 1; i >= left-1; i-- {
		reversedRange = append(reversedRange, nodes[i])
	}

	result = append(result, reversedRange...)

	for i := right; i < len(nodes); i++ {
		result = append(result, nodes[i])
	}

	for i := 0; i < len(result)-1; i++ {
		result[i].Next = result[i+1]
	}

	result[len(result)-1].Next = nil

	return result[0]
}