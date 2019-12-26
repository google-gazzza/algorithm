// https://leetcode.com/problems/increasing-order-search-tree/
// Runtime: 32 ms, faster than 91.38% of C++ online submissions for Increasing Order Search Tree.
// Memory Usage: 15 MB, less than 100.00% of C++ online submissions for Increasing Order Search Tree.

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
    TreeNode* increasingBST(TreeNode* root, TreeNode* next = nullptr) {
        if (root == nullptr) return next;
        auto tree = increasingBST(root->left, root);
        root->left = nullptr;
        root->right = increasingBST(root->right, next);
        return tree;
    }
};