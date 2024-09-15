// leetcode/hard/25. Reverse Nodes in k-Group
// 25-reverse-nodes-in-k-group
// URL: https://leetcode.com/problems/reverse-nodes-in-k-group/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function reverseNodeArray(array: ListNode[]) {
  const result = new ListNode();
  let temp = result;

  for (let i = array.length - 1; i >= 0; i -= 1) {
    temp.next = new ListNode(array[i].val);
    temp = temp.next;
  }

  return result.next;
}

function moveCursorToEnd(cursor: ListNode) {
  while (cursor.next) {
    cursor = cursor.next;
  }

  return cursor;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const resultHead = new ListNode();
  let resultCursor = resultHead;

  while (head) {
    let chunk: ListNode[] = [];

    for (let i = 0; i < k; i += 1) {
      chunk.push(head);

      if (head?.next) {
        head = head.next;
      } else {
        head = null;
        break;
      }
    }

    if (chunk.length === k) {
      resultCursor.next = reverseNodeArray(chunk);
      resultCursor = moveCursorToEnd(resultCursor);
    } else {
      resultCursor.next = chunk[0];
    }
  }

  return resultHead.next;
}
