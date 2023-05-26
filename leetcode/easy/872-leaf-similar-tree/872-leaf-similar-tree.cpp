/*
872-leaf-similar-trees
leetcode/easy/872. Leaf-Similar Trees
URL: https://leetcode.com/problems/leaf-similar-trees/description/

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
    vector<int> getLeafValues(TreeNode *root) {
        if (root == nullptr) {
            return {};
        }
        vector<int> left = getLeafValues(root->left);
        vector<int> right = getLeafValues(root->right);

        if (left.empty() && right.empty()) {
            return {root->val};
        }

        left.insert(left.end(), right.begin(), right.end());

        return left;
    }

    bool leafSimilar(TreeNode *root1, TreeNode *root2) {
        vector<int> left = getLeafValues(root1);
        vector<int> right = getLeafValues(root2);

        if (left.size() != right.size()) {
            return false;
        }

        for (int i = 0; i < left.size(); i++) {
            if (left[i] != right[i]) {
                return false;
            }
        }

        return true;
    }
};
