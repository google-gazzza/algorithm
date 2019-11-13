"""
https://leetcode.com/problems/binary-tree-inorder-traversal/
Runtime: 28 ms, faster than 96.58% of Python3 online submissions for Binary Tree Inorder Traversal.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Binary Tree Inorder Traversal.
"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:

        def search(root, results):
            if root == None:
                return
            if root.left != None:
                search(root.left, results)
            results.append(root.val)
            if root.right != None:
                search(root.right, results)

        results = []
        search(root, results)

        return results
