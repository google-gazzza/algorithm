// https://leetcode.com/problems/symmetric-tree/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Symmetric Tree.
// Memory Usage: 14.7 MB, less than 96.61% of C++ online submissions for Symmetric Tree.

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
    bool comp(TreeNode* left, TreeNode* right) {
        if (left == nullptr && right == nullptr) return true;
        if (left == nullptr || right == nullptr) return false;
        return (left->val == right->val) 
            && comp(left->left, right->right)
            && comp(left->right, right->left);
    }
    
    bool isSymmetric(TreeNode* root) {
        if (root == nullptr) return true;
        return comp(root->left, root->right);
    }
};