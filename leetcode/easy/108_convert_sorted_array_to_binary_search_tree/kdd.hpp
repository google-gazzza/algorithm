// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Runtime: 16 ms, faster than 87.81% of C++ online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 21 MB, less than 97.30% of C++ online submissions for Convert Sorted Array to Binary Search Tree.

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
    template <class Arr>
    TreeNode* makeBST(Arr& arr, std::size_t from, std::size_t to) {
        if (from >= to) return nullptr;
        auto mid = (from + to) * 0.5;
        TreeNode* node = new TreeNode(arr[mid]);
        node->left = makeBST(arr, from, mid);
        node->right = makeBST(arr, mid + 1, to);        
        return node;
    }
    
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return makeBST(nums, 0, nums.size());
    }
};