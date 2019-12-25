// https://leetcode.com/problems/binary-tree-preorder-traversal/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 9.2 MB, less than 94.83% of C++ online submissions for Binary Tree Preorder Traversal.

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
    vector<int> preorderTraversal(TreeNode* root) {
        std::stack<TreeNode*> st;        
        st.push(root);        
        std::vector<int> results;
        
        while (!st.empty()) {
            auto node = st.top();
            st.pop();
            if (node == nullptr) continue;
            results.emplace_back(node->val);
            st.push(node->right);
            st.push(node->left);
        };
        
        return results;
    }
};


// https://leetcode.com/problems/binary-tree-preorder-traversal/
// Runtime: 4 ms, faster than 59.62% of C++ online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 9.3 MB, less than 87.93% of C++ online submissions for Binary Tree Preorder Traversal.

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
    template <class List>
    void preorder(TreeNode* root, List&& list) {
        if (root == nullptr) return;
        list.emplace_back(root->val);
        preorder(root->left, list);
        preorder(root->right, list);
    }
        
    vector<int> preorderTraversal(TreeNode* root) {
        std::vector<int> results;
        preorder(root, results);
        return results;
    }
};