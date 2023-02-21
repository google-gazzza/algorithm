/*
leetcode/medium/707. Design Linked List
707-design-linked-list
URL: https://leetcode.com/problems/design-linked-list/description/

*/

package main

type list []int
type MyLinkedList struct {
	list
}

func Constructor() MyLinkedList {
	return MyLinkedList{}
}

func (this *MyLinkedList) Get(index int) int {
	if index >= len(this.list) {
		return -1
	}

	return this.list[index]
}
func (this *MyLinkedList) AddAtHead(val int) {
	this.list = append([]int{val}, this.list...)
}

func (this *MyLinkedList) AddAtTail(val int) {
	this.list = append(this.list, val)
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index > len(this.list) {
		return
	}

	this.list = append(this.list[:index], append([]int{val}, this.list[index:]...)...)
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index >= len(this.list) {
		return
	}

	this.list = append(this.list[:index], this.list[index+1:]...)
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */
