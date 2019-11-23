// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Runtime: 8 ms, faster than 96.12% of C++ online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 20.1 MB, less than 30.95% of C++ online submissions for Minimum Depth of Binary Tree.

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
    int minDepth(TreeNode* root) {
        if (root == nullptr) return 0;
        if (root->left == nullptr) return 1 + minDepth(root->right);
        else if (root->right == nullptr) return 1 + minDepth(root->left);
        return 1 + std::min(minDepth(root->left), minDepth(root->right));
    }
};


// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Runtime: 12 ms, faster than 75.93% of C++ online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 19.4 MB, less than 100.00% of C++ online submissions for Minimum Depth of Binary Tree.

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
    int minDepth(TreeNode* root) {
        if (root == nullptr) return 0;
        std::queue<std::pair<TreeNode*, int>> q;
        q.emplace(root, 1);
        while (!q.empty()) {
            auto node = q.front();
            q.pop();
            if (node.first->left == nullptr && node.first->right == nullptr) return node.second;
            if (node.first->left != nullptr) q.emplace(node.first->left, node.second + 1);
            if (node.first->right != nullptr) q.emplace(node.first->right, node.second + 1);            
        }
        
        return -1;
    }
};
