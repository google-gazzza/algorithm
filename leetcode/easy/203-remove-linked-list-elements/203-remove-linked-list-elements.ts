/*
203-remove-linked-list-elements
leetcode/easy/203. Remove Linked List Elements
Difficulty: easy
URL: https://leetcode.com/problems/remove-linked-list-elements/
*/


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function removeElements(head: ListNode | null, val: number): ListNode | null {
    let cursor: ListNode = head;
    let _head: ListNode = head;
  
    while (_head) {
      if (_head.val === val) {
        _head = _head.next;
        cursor = _head;
      } else {
        if (_head?.next?.val === val) {
          _head.next = _head.next.next;
        } else {
          _head = _head.next;
        }
      }
    }
  
    return cursor;
  };
  