# https://leetcode.com/problems/copy-list-with-random-pointer
# Runtime: 32 ms, faster than 89.58% of Python3 online submissions for Copy List with Random Pointer.
# Memory Usage: 14.8 MB, less than 100.00% of Python3 online submissions for Copy List with Random Pointer.
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        sequence = []
        sequence2 = []
        _n = self.copy(head, sequence, sequence2)
        __n = _n
        while(head != None):
            if head.random:
                tmp = sequence.index(id(head.random))
                __n.random = sequence2[tmp]
            head = head.next
            __n = __n.next

        return _n

    def copy(self, n: 'Node', sequence: List, sequence2: List) -> 'Node':
        if not n :
            return
        _n = Node(n.val)
        sequence.append(id(n))
        sequence2.append(_n)
        _n.next = self.copy(n.next, sequence, sequence2)
        return _n

