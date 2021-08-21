// [Medium] 1265. Print Immutable Linked List in Reverse
// 1265_print_immutable_linked_list_in_reverse

// https://leetcode.com/problems/print-immutable-linked-list-in-reverse
// Runtime: 80 ms, faster than 81.82% of TypeScript online submissions for Print Immutable Linked List in Reverse.
// Memory Usage: 40.7 MB, less than 81.82% of TypeScript online submissions for Print Immutable Linked List in Reverse.

/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ImmutableListNode {
 *      printValue() {}
 *
 *      getNext(): ImmutableListNode {}
 * }
 */

function printLinkedListInReverse(head: ImmutableListNode) {
  const candidateArr: ImmutableListNode[] = []
  let target: ImmutableListNode = head
  while (target !== null) {
    candidateArr.push(target)
    target = target.getNext()
  }
  while (candidateArr.length > 0) {
    candidateArr.pop().printValue()
  }
}
