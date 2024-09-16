# 113-path-sum-ii
# leetcode/medium/113. Path Sum II
# URL: https://leetcode.com/problems/path-sum-ii/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List, Optional
import copy


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:

    def dfs(self, root, targetSum, path, result):
        if not root:
            return

        path.append(root.val)

        if not root.left and not root.right and targetSum == root.val:
            result.append(copy.deepcopy(path))

        self.dfs(root.left, targetSum - root.val, path, result)
        self.dfs(root.right, targetSum - root.val, path, result)

        if len(path):
            path.pop()

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        result = []

        self.dfs(root, targetSum, [], result)

        return result
