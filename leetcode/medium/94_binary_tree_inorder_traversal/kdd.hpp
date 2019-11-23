// https://leetcode.com/problems/binary-tree-inorder-traversal/
// Runtime: 4 ms, faster than 58.89% of C++ online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 9.1 MB, less than 95.00% of C++ online submissions for Binary Tree Inorder Traversal.

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
    vector<int> inorderTraversal(TreeNode* root) {
        std::vector<int> results;
        std::stack<TreeNode*> stk;
        auto curr = root;
        while (curr != nullptr || !stk.empty()) {
            while (curr != nullptr) {
                stk.emplace(curr);
                curr = curr->left;
            }
            curr = stk.top();
            results.emplace_back(curr->val);
            curr = curr->right;
            stk.pop();           
        }        
        
        return results;
    }
};

// https://leetcode.com/problems/binary-tree-inorder-traversal/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 9.5 MB, less than 44.00% of C++ online submissions for Binary Tree Inorder Traversal.

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
    template <class Vec>
    void traverse(Vec&& vec, TreeNode* node) {
        if (node == nullptr) return;
        if (node->left != nullptr) traverse(vec, node->left);
        vec.emplace_back(node->val);
        if (node->right != nullptr) traverse(vec, node->right);
    }
    
    vector<int> inorderTraversal(TreeNode* root) {
        std::vector<int> results;
        traverse(results, root);
        return results;
    }
};
