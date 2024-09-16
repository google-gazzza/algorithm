/*
1261-find-elements-in-a-contaminated-binary-tree
leetcode/medium/1261. Find Elements in a Contaminated Binary Tree
URL: https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/description/

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
class FindElements {
public:
    set<int> valueSet;

    void recover(TreeNode *root, int val) {
        if (root == nullptr) {
            return;
        }

        root->val = val;
        valueSet.insert(val);

        recover(root->left, 2 * val + 1);
        recover(root->right, 2 * val + 2);
    }

    FindElements(TreeNode *root) {
        recover(root, 0);
    }

    bool find(int target) {
        return valueSet.find(target) != valueSet.end();
    }
};
