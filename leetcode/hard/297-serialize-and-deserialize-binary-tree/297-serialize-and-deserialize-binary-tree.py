"""
297-serialize-and-deserialize-binary-tree
leetcode/hard/297. Serialize and Deserialize Binary Tree
Difficulty: hard
URL: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
"""

from typing import List


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


import json


class Codec:
    def createNode(self):
        return {
            'val': None,
            'left': None,
            'right': None,
        }

    def serializePreOrderTraversal(self, root, result):
        if root:
            result['val'] = root.val
        else:
            return

        if root.left:
            result['left'] = self.createNode()
            self.serializePreOrderTraversal(root.left, result['left'])

        if root.right:
            result['right'] = self.createNode()
            self.serializePreOrderTraversal(root.right, result['right'])

    def deserializePreOrderTraversal(self, root, result):
        if root:
            result.val = root['val']
        else:
            return

        if root['left']:
            result.left = TreeNode()
            self.deserializePreOrderTraversal(root['left'], result.left)

        if root['right']:
            result.right = TreeNode()
            self.deserializePreOrderTraversal(root['right'], result.right)

    def serialize(self, root):
        """Encodes a tree to a single string.
        :type root: TreeNode
        :rtype: str
        """
        _root = self.createNode()
        self.serializePreOrderTraversal(root, _root)

        return json.dumps(_root)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        parsedData = json.loads(data)
        _root = TreeNode()

        if not parsedData['val']:
            return _root

        self.deserializePreOrderTraversal(parsedData, _root)

        return _root
