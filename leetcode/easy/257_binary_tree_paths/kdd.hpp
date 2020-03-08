// https://leetcode.com/problems/binary-tree-paths/
// Runtime: 4 ms, faster than 76.94% of C++ online submissions for Binary Tree Paths.
// Memory Usage: 11.2 MB, less than 94.74% of C++ online submissions for Binary Tree Paths.

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
    template <class Result, class Tree, class Str>
    void dfs(Result&& result, Tree&& tree, Str&& str) {
        if (tree->left == nullptr && tree->right == nullptr) {
            result.emplace_back(str);
            return;
        }
        str.append("->");
        if (tree->left != nullptr) dfs(result, tree->left, str + std::to_string(tree->left->val));
        if (tree->right != nullptr) dfs(result, tree->right, str + std::to_string(tree->right->val));
    }
    
    vector<string> binaryTreePaths(TreeNode* root) {
        std::vector<std::string> result;
        if (root != nullptr) dfs(result, root, std::to_string(root->val));
        return result;
    }
};