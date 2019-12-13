// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Runtime: 4 ms, faster than 85.91% of C++ online submissions for Remove Nth Node From End of List.
// Memory Usage: 8.7 MB, less than 40.79% of C++ online submissions for Remove Nth Node From End of List.

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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        auto first = head;
        auto second = head;
        while (first != NULL) {
            first = first->next;
            if (--n < -1) second = second->next;
        }
        if (n == 0) head = head->next;
        else second->next = second->next->next;
        return head;
    }
};