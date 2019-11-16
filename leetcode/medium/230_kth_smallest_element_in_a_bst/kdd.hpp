// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Runtime: 16 ms, faster than 96.77% of C++ online submissions for Kth Smallest Element in a BST.
// Memory Usage: 21.8 MB, less than 28.33% of C++ online submissions for Kth Smallest Element in a BST.

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
    template <class T>
    void sorted(TreeNode* root, T&& vec) {
        if (root == nullptr) return;
        sorted(root->left, vec);
        vec.emplace_back(root->val);
        sorted(root->right, vec);
    }
    
    int kthSmallest(TreeNode* root, int k) {
        std::vector<int> results;
        sorted(root, results);
        return results[k - 1];
    }
};