// https://leetcode.com/problems/first-unique-character-in-a-string/
// Runtime: 64 ms, faster than 40.68% of C++ online submissions for First Unique Character in a String.
// Memory Usage: 13.1 MB, less than 34.38% of C++ online submissions for First Unique Character in a String.

class Solution {
public:
    int firstUniqChar(string s) {
        std::unordered_map<char, int> map;
        std::for_each(s.begin(), s.end(), [&map](auto&& s) { ++map[s]; });
        for (auto i = 0; i < s.size(); ++i) if (map[s[i]] == 1) return i;        
        return -1;
    }
};
