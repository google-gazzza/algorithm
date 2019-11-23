// https://leetcode.com/problems/path-sum/
// Runtime: 8 ms, faster than 96.20% of C++ online submissions for Path Sum.
// Memory Usage: 19.7 MB, less than 100.00% of C++ online submissions for Path Sum.

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
    bool hasPathSum(TreeNode* root, int sum) {
        if (root == nullptr) return false;
        if (root->left == nullptr && root->right == nullptr) {
            if (sum - root->val == 0) return true;
            return false;
        }
        sum -= root->val;
        if (hasPathSum(root->left, sum) || hasPathSum(root->right, sum)) return true;
        return false;
    }
};