/*
1290-convert-binary-number-in-a-linked-list-to-integer
leetcode/easy/1290. Convert Binary Number in a Linked List to Integer
Difficulty: easy
URL: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
*/

package main

import (
	"fmt"
	"strconv"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func getDecimalValue(head *ListNode) int {
	var result string

	for head != nil {
		result = result + strconv.Itoa(head.Val)
		head = head.Next
	}

	i, err := strconv.ParseInt(result, 2, 64)

	if err != nil {
		fmt.Println(err)
	}

	return int(i)
}

func main() {
	fmt.Println("hello world")

	root := ListNode{}
	root.Val = 1
	root.Next = &ListNode{Val: 0}
	root.Next.Next = &ListNode{Val: 1}
	//output := []int{2, 4, 3, 1}
	fmt.Println(getDecimalValue(&root))
}
