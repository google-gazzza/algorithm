# 138-copy-list-with-random-pointer
# leetcode/medium/copy-list-with-random-pointer.py
# URL: https://leetcode.com/problems/copy-list-with-random-pointer/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head):
        original_list = []
        node_list = []

        original_pointer = head

        while original_pointer:
            original_list.append(original_pointer)
            node_list.append(Node(original_pointer.val, None, None))

            original_pointer = original_pointer.next

        original_list.append(None)
        node_list.append(None)

        original_pointer = head
        copy_pointer = node_list[0]

        while original_pointer:
            index = original_list.index(original_pointer.random)
            copy_pointer.random = node_list[index]
            copy_pointer.next = node_list[original_list.index(original_pointer.next)]

            original_pointer = original_pointer.next
            copy_pointer = copy_pointer.next

        return node_list[0]
