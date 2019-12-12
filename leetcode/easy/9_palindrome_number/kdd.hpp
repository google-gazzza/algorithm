// https://leetcode.com/problems/palindrome-number/
// Runtime: 8 ms, faster than 90.33% of C++ online submissions for Palindrome Number.
// Memory Usage: 8.1 MB, less than 92.73% of C++ online submissions for Palindrome Number.

class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) return false;
        int64_t original = x;
        int64_t revert = 0;
        while (original > 0) {
            revert = revert * 10 + original % 10;
            original /= 10;
        };
        
        if (x == revert) return true;
        return false;        
    }
};