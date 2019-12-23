// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Runtime: 8 ms, faster than 97.86% of C++ online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 9.3 MB, less than 83.02% of C++ online submissions for Remove Duplicates from Sorted List.

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
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* result = head;
        while (head != nullptr && head->next != nullptr) {
            if (head->val == head->next->val) {
                head->next = head->next->next;
            }  
            else {
                head = head->next;
            }
        };
        return result;
    }
};