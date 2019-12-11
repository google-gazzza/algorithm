// https://leetcode.com/problems/merge-k-sorted-lists/
// Runtime: 24 ms, faster than 91.20% of C++ online submissions for Merge k Sorted Lists.
// Memory Usage: 11.1 MB, less than 67.86% of C++ online submissions for Merge k Sorted Lists.

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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto comp = [](ListNode* l1, ListNode* l2) {
            return l1->val > l2->val;
        };
        
        std::priority_queue<ListNode*, std::vector<ListNode*>, decltype(comp)> q(comp);
        for (auto& head : lists) {
            if (head != nullptr) q.push(head);
        }
                
        ListNode head(0);
        ListNode* listNode = &head;
        while (!q.empty()) {
            listNode->next = q.top();
            q.pop();    
            listNode = listNode->next;
            if (listNode->next != nullptr) q.push(listNode->next);
        };
        return head.next;
    }
};