// https://leetcode.com/problems/is-subsequence/
// Runtime: 56 ms, faster than 96.48% of C++ online submissions for Is Subsequence.
// Memory Usage: 14.4 MB, less than 100.00% of C++ online submissions for Is Subsequence.

class Solution {
public:
    bool isSubsequence(const string& s, const string& t) {        
        if (s.empty()) return true;
        const auto sSize = s.size();
        const auto tSize = t.size();
        if (sSize > tSize) return false;
        auto sIter = 0;
        auto tIter = 0;
        while (tIter != tSize) {
            if (s[sIter] == t[tIter]) ++sIter;
            if (sIter == sSize) return true;
            ++tIter;
        };
        
        return false;
    }
};

// https://leetcode.com/problems/is-subsequence/
// Runtime: 72 ms, faster than 22.61% of C++ online submissions for Is Subsequence.
// Memory Usage: 14.4 MB, less than 100.00% of C++ online submissions for Is Subsequence.

class Solution {
public:
    bool isSubsequence(string s, string t) {        
        if (s.empty()) return true;
        if (s.size() > t.size()) return false;
        auto sIter = s.cbegin();
        auto tIter = t.cbegin();
        while (tIter != t.cend()) {
            if (*sIter == *tIter) ++sIter;
            if (sIter == s.cend()) return true;
            ++tIter;
        };
        
        return false;
    }
};