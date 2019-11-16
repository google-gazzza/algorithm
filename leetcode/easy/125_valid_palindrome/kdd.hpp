// https://leetcode.com/problems/valid-palindrome/
// Runtime: 8 ms, faster than 84.23% of C++ online submissions for Valid Palindrome.
// Memory Usage: 9.9 MB, less than 12.25% of C++ online submissions for Valid Palindrome.

class Solution {
public:
    bool isPalindrome(string s) {
        std::string conv;
        s.erase(std::remove_if(s.begin(), s.end(), [](auto&& c) {
            return !std::isalnum(c);
        }), s.end());
        std::transform(s.begin(), s.end(), std::back_inserter(conv), [](auto&& c) {
            return std::tolower(c);
        });
        if (conv == std::string(conv.rbegin(), conv.rend())) return true;
        return false;
    }
};
