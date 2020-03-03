// https://leetcode.com/problems/invert-binary-tree/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Invert Binary Tree.
// Memory Usage: 10.2 MB, less than 5.45% of C++ online submissions for Invert Binary Tree.

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {   
public:
    TreeNode* invertTree(TreeNode* root) {
        if (root == nullptr) return root;
        std::swap(root->left, root->right);
        if (root->left != nullptr) invertTree(root->left);
        if (root->right != nullptr) invertTree(root->right);
        return root;
    }
};