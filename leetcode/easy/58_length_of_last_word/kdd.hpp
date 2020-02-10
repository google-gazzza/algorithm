// https://leetcode.com/problems/length-of-last-word/
// Runtime: 4 ms, faster than 72.14% of C++ online submissions for Length of Last Word.
// Memory Usage: 8.8 MB, less than 77.78% of C++ online submissions for Length of Last Word.

class Solution {
public:
    int lengthOfLastWord(string s) {
        if (s.empty()) return 0;
        while (s[s.size() - 1] == ' ') s.erase(s.end() - 1);
        return std::distance(s.rbegin(), std::find(s.rbegin(), s.rend(), ' '));
    }
};