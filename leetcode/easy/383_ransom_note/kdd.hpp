// https://leetcode.com/problems/ransom-note/
// Runtime: 16 ms, faster than 97.43% of C++ online submissions for Ransom Note.
// Memory Usage: 10.9 MB, less than 100.00% of C++ online submissions for Ransom Note.

class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        std::array<int32_t, 26> alphabets = {0,};
        std::for_each(magazine.cbegin(), magazine.cend(), [&alphabets](auto&& c) {
            ++alphabets[c - 'a'];
        });
        for (auto& c : ransomNote) {
            auto idx = c - 'a';
            --alphabets[idx];
            if (alphabets[idx] < 0) return false;
        }
        
        return true;
    }
};