// https://leetcode.com/problems/merge-two-sorted-lists/
// Runtime: 4 ms, faster than 98.88% of C++ online submissions for Merge Two Sorted Lists.
// Memory Usage: 8.9 MB, less than 74.59% of C++ online submissions for Merge Two Sorted Lists.

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
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode result(0);
        ListNode* listNode = &result;
        while (l1 != nullptr && l2 != nullptr) {
            if (l1->val < l2->val) {
                listNode->next = l1;
                l1 = l1->next;
            }
            else {
                listNode->next = l2;
                l2 = l2->next;
            }     
            listNode = listNode->next;
        }
        
        listNode->next = (l1 != nullptr) ? l1 : l2;        
        return result.next;
    }
};