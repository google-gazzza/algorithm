// [Medium] 1265. Print Immutable Linked List in Reverse
// 1265_print_immutable_linked_list_in_reverse

// https://leetcode.com/problems/print-immutable-linked-list-in-reverse
// Runtime: 60 ms, faster than 99.14% of JavaScript online submissions for Print Immutable Linked List in Reverse.
// Memory Usage: 41.4 MB, less than 87.07% of JavaScript online submissions for Print Immutable Linked List in Reverse.

/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
const printLinkedListInReverse = function (head) {
  const candidateArr = []
  let target = head
  while (target !== null) {
    candidateArr.push(target)
    target = target.getNext()
  }
  while (candidateArr.length > 0) {
    candidateArr.pop().printValue()
  }
}
