"""
1469-find-all-the-lonely-nodes
leetcode/easy/1469. Find All The Lonely Nodes
Difficulty:  easy
URL: https://leetcode.com/problems/find-all-the-lonely-nodes/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getLonelyNodes(self, root) -> List[int]:
        result = []

        def pre_order_traversal(root):
            if not root.left or not root.right:
                if root.left:
                    result.append(root.left.val)
                    pre_order_traversal(root.left)
                if root.right:
                    result.append(root.right.val)
                    pre_order_traversal(root.right)
            else:
                pre_order_traversal(root.left)
                pre_order_traversal(root.right)

        pre_order_traversal(root)

        return result
