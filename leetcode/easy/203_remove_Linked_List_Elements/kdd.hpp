// https://leetcode.com/problems/remove-linked-list-elements/
// Runtime: 24 ms, faster than 95.96% of C++ online submissions for Remove Linked List Elements.
// Memory Usage: 11 MB, less than 75.47% of C++ online submissions for Remove Linked List Elements.

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
    ListNode* removeElements(ListNode* head, int val) {
        if (head == nullptr) return head;
        ListNode* temp = head;
        
        while (temp->next != nullptr){
            if (temp->next->val == val) temp->next = temp->next->next;
            else temp = temp->next;
        };
        
        if (head->val == val) head = head->next;
        return head;
    }
};