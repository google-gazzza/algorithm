/*
21-merge-two-sorted-lists

# leetcode/easy/21. Merge Two Sorted Lists
difficulty: easy
URL: https://leetcode.com/problems/merge-two-sorted-lists/
tags: linked-list, reduce

## Approach

### en
1.defined parseToArray that iterate and parse all node to array
2.parse l1 and l2 and concat these two array
2-1 Sort the results of process-2 in descending order.
2-2 reduce for iteration and generate ListNode and link all node

### kr
1.모든 노드를 array로 parsing해주는 parseToArray를 구현합니다.
2.l1, l2 를 파싱한후 concat으로 이어붙입니다.
2-1 합쳐진 어레이를 내림차순으로 정렬합니다.
2-2 reduce를통해 이터레이션하며 모든 밸류를 ListNode로 생성한후 이전 값을 link합니다.

## Solution
### JavaScript

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const parseToArray = (node, array = []) => {
  if (node) {
    return parseToArray(node.next, array.concat(node.val));
  }
  return array;
};

const mergeTwoLists = (l1, l2) => parseToArray(l1)
  .concat(parseToArray(l2))
  .sort((a, b) => b - a)
  .reduce((acc, cur) => new ListNode(cur, acc), null);
