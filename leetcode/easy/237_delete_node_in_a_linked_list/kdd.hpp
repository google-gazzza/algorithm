// https://leetcode.com/problems/delete-node-in-a-linked-list/
// Runtime: 12 ms, faster than 84.80% of C++ online submissions for Delete Node in a Linked List.
// Memory Usage: 10.2 MB, less than 11.54% of C++ online submissions for Delete Node in a Linked List.

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        *node = *node->next;
    }
};