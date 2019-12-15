// https://leetcode.com/problems/linked-list-cycle/
// Runtime: 4 ms, faster than 99.93% of C++ online submissions for Linked List Cycle.
// Memory Usage: 9.7 MB, less than 96.05% of C++ online submissions for Linked List Cycle.

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
    bool hasCycle(ListNode *head) {
        if (head == nullptr) return false;
        auto tortoise = head;
        auto hare = head->next;
        while (tortoise != hare) {
            if (hare == nullptr || hare->next == nullptr) return false;            
            tortoise = tortoise->next;
            hare = hare->next->next;
        };
        return true;
    }
};