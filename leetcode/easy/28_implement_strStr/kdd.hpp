// https://leetcode.com/problems/implement-strstr/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Implement strStr().
// Memory Usage: 9 MB, less than 87.14% of C++ online submissions for Implement strStr().

class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.empty()) return 0;
        return haystack.find(needle);
    }
};