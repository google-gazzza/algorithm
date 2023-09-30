# leetcode/easy/2689. Extract Kth Character From The Rope Tree
# 2689-extract-kth-character-from-the-rope-tree
# URL: https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/

from typing import Optional


# Definition for a rope tree node.
# class RopeTreeNode(object):
#     def __init__(self, len=0, val="", left=None, right=None):
#         self.len = len
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getKthCharacter(self, root: Optional[object], k: int) -> str:
        characterCount = 0
        charList = []

        def dfs(node):
            nonlocal characterCount
            nonlocal charList

            if not node:
                return

            charList.append(node.val)
            characterCount += len(node.val)

            if characterCount >= k:
                return

            dfs(node.left)
            dfs(node.right)

        dfs(root)

        chars = "".join(charList)

        return chars[k - 1]
