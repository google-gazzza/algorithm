// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Runtime: 8 ms, faster than 58.20% of C++ online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 13.8 MB, less than 88.73% of C++ online submissions for Binary Tree Level Order Traversal.

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
    vector<vector<int>> levelOrder(TreeNode* root) {
        std::vector<std::vector<int>> results;
        std::queue<TreeNode*> queue;
        if (root != nullptr) queue.emplace(root);        
        while (!queue.empty()) {
            auto size = queue.size();
            std::vector<int> result;
            for (auto i = 0; i < size; ++i) {
                auto node = queue.front();
                result.emplace_back(node->val);
                if (node->left != nullptr) queue.emplace(node->left);
                if (node->right != nullptr) queue.emplace(node->right);
                queue.pop();
            }            
            results.emplace_back(result);
        }        
        return results;
    }
};
