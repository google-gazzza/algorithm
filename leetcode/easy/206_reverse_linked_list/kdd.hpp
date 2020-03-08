// https://leetcode.com/problems/reverse-linked-list/
// Runtime: 4 ms, faster than 99.00% of C++ online submissions for Reverse Linked List.
// Memory Usage: 9.3 MB, less than 62.59% of C++ online submissions for Reverse Linked List.

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
    ListNode* reverseList(ListNode* head) {
        if (head == nullptr || head->next == nullptr) return head;
        auto node = reverseList(head->next);
        head->next->next = head;
        head->next = nullptr;
        return node;
    }
};

// https://leetcode.com/problems/reverse-linked-list/
// Runtime: 8 ms, faster than 77.96% of C++ online submissions for Reverse Linked List.
// Memory Usage: 9.2 MB, less than 83.21% of C++ online submissions for Reverse Linked List.

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
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        auto curr = head;
        while (curr != nullptr) {
            auto next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
};
