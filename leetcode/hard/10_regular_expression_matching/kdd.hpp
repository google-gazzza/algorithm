// https://leetcode.com/problems/regular-expression-matching/
// Runtime: 152 ms, faster than 21.92% of C++ online submissions for Regular Expression Matching.
// Memory Usage: 12.1 MB, less than 16.95% of C++ online submissions for Regular Expression Matching.

class Solution {
public:
    bool isMatch(string s, string p) {
        return std::regex_match(s, std::regex(p));
    }
};