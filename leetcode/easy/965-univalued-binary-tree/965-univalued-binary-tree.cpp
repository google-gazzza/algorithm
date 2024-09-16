/*
965-univalued-binary-tree
leetcode/easy/965. Univalued Binary Tree
URL: https://leetcode.com/problems/univalued-binary-tree/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */



class Solution {
public:
    auto dfs(TreeNode *root) -> vector<int> {
        if (root == nullptr) {
            return {};
        }

        if (root->left == nullptr && root->right == nullptr) {
            return {root->val};
        }

        vector<int> result = {root->val};
        auto left = dfs(root->left);
        auto right = dfs(root->right);

        result.insert(result.end(), left.begin(), left.end());
        result.insert(result.end(), right.begin(), right.end());

        return result;
    }

    bool isUnivalTree(TreeNode *root) {
        auto rootVal = root->val;
        auto leafs = dfs(root);

        for (auto leaf: leafs) {
            if (leaf != rootVal) {
                return false;
            }
        }

        return true;
    }
};
