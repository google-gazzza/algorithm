// https://leetcode.com/problems/reverse-bits/
// Runtime: 4 ms, faster than 67.85% of C++ online submissions for Reverse Bits.
// Memory Usage: 7.9 MB, less than 100.00% of C++ online submissions for Reverse Bits.

class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        std::bitset<32> origin(n);
        auto tmp = origin.to_string();
        std::bitset<32> reverse(std::string(tmp.rbegin(), tmp.rend()));
        return reverse.to_ulong();
    }
};