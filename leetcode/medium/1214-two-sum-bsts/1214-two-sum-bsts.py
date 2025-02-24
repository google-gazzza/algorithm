# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def twoSumBSTs(self, root1: Optional[TreeNode], root2: Optional[TreeNode], target: int) -> bool:
        map1 = {}
        map2 = {}

        def bst(root, map):
            if root:
                map[root.val] = True
                bst(root.left, map)
                bst(root.right, map)

        bst(root1, map1)
        bst(root2, map2)

        for key in map1:
            if target - key in map2:
                return True

        return False
