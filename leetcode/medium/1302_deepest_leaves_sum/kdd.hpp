// https://leetcode.com/problems/deepest-leaves-sum/
// Runtime: 40 ms, faster than 96.05% of C++ online submissions for Deepest Leaves Sum.
// Memory Usage: 31.4 MB, less than 100.00% of C++ online submissions for Deepest Leaves Sum.

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
    Solution()
        : m_maxDepth(0)
        , m_sum(0)
    {}
    
private:
    void getSum(TreeNode* root, int currDepth) {
        if (!root->left && !root->right) {
            if (currDepth > m_maxDepth) {
                m_maxDepth = currDepth;
                m_sum = root->val;                
            }
            else if (currDepth == m_maxDepth) m_sum += root->val;
        }
        if (root->left) getSum(root->left, currDepth + 1);
        if (root->right) getSum(root->right, currDepth + 1);
    }
    
public:
    int deepestLeavesSum(TreeNode* root) {
        getSum(root, 1);
        return m_sum;
    }
    
private:
    int m_maxDepth;
    int m_sum;
};

// https://leetcode.com/problems/deepest-leaves-sum/
// Runtime: 76 ms, faster than 5.69% of C++ online submissions for Deepest Leaves Sum.
// Memory Usage: 31.9 MB, less than 100.00% of C++ online submissions for Deepest Leaves Sum.

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
    int deepestLeavesSum(TreeNode* root) {
        std::queue<TreeNode*> q;
        q.push(root);
        int result = 0;
        while (!q.empty()) {
            int32_t size = q.size();
            result = 0;
            while (--size > -1) {
                auto node = q.front();
                result += node->val;
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
                q.pop();                
            };
        };
        
        return result;
    }
};