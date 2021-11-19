"""
1302-deepest-leaves-sum
leetcode/medium/1302. Deepest Leaves Sum
difficulty: medium
URL: https://leetcode.com/problems/deepest-leaves-sum/
"""

from typing import List


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        queue = [root]
        next_queue = []
        _sum = 0

        while queue:
            node = queue.pop()
            _sum += node.val

            if node.left:
                next_queue.append(node.left)
            if node.right:
                next_queue.append(node.right)

            if not queue:
                if not next_queue:
                    return _sum

                _sum = 0
                queue = next_queue
                next_queue = []
