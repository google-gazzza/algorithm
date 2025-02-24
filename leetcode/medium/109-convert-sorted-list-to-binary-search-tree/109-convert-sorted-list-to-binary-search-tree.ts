// leetcode/medium/109. Convert Sorted List to Binary Search Tree
// 109-convert-sorted-list-to-binary-search-tree
// URL: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return new TreeNode(head.val);
  }

  let slowPointer = head;
  let fastPointer = head;
  let previousSlowPointer = null;

  while (fastPointer && fastPointer.next) {
    previousSlowPointer = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // cut the list
  if (previousSlowPointer) {
    previousSlowPointer.next = null;
  }

  // slowPointer is the middle element
  const root = new TreeNode(slowPointer.val);
  // head is the head of the left list
  root.left = sortedListToBST(head);
  // slowPointer.next is the head of the right list
  root.right = sortedListToBST(slowPointer.next);

  return root;
}


