// https://leetcode.com/problems/number-of-1-bits/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Number of 1 Bits.
// Memory Usage: 8.1 MB, less than 90.24% of C++ online submissions for Number of 1 Bits.

class Solution {
public:
    int hammingWeight(uint32_t n) {
        return std::bitset<32>(n).count();
    }
};