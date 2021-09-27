// https://leetcode.com/problems/binary-search-tree-iterator/
// Runtime: 56 ms, faster than 69.62% of C++ online submissions for Binary Search Tree Iterator.
// Memory Usage: 34.4 MB, less than 6.52% of C++ online submissions for Binary Search Tree Iterator.

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class BSTIterator {
private:
    std::list<TreeNode*> m_list;
    std::list<TreeNode*>::iterator m_curr;
    
private:
    void sortInorder(TreeNode* node) {
        if (node == nullptr) return;
        sortInorder(node->left);
        m_list.emplace_back(node);
        sortInorder(node->right);
    }
    
public:
    BSTIterator(TreeNode* root) 
        : m_list()
        , m_curr()
    {
        sortInorder(root);
        m_curr = m_list.begin();
    }
    
    /** @return the next smallest number */
    int next() {
        return (*m_curr++)->val;
    }
    
    /** @return whether we have a next smallest number */
    bool hasNext() {
        return m_curr != m_list.end();
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator* obj = new BSTIterator(root);
 * int param_1 = obj->next();
 * bool param_2 = obj->hasNext();
 */