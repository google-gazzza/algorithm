"""
1265-print-immutable-linked-list-in-reverse 
leetcode/medium/1265. Print Immutable Linked List in Reverse
Difficulty: medium
URL: https://leetcode.com/problems/print-immutable-linked-list-in-reverse/ 
"""


class Solution:
    def printLinkedListInReverse(self, head) -> None:
        nodes = []

        target_node = head

        while target_node:
            nodes.append(target_node)
            target_node = target_node.getNext()

        for node in list(reversed(nodes)):
            node.printValue()

        map(lambda node: node.printValue(), reversed(nodes))


# recursive solution
# https://leetcode.com/problems/print-immutable-linked-list-in-reverse/discuss/526387/Python3-Recursive-Solution
class Solution:
    def printLinkedListInReverse(self, head: 'ImmutableListNode') -> None:
        if head:
            node = head.getNext()
            self.printLinkedListInReverse(node)
            head.printValue()
