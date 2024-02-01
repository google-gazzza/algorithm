// https://leetcode.com/problems/power-of-three/
// Runtime: 8 ms, faster than 95.47% of C++ online submissions for Power of Three.
// Memory Usage: 8.6 MB, less than 9.52% of C++ online submissions for Power of Three.

class Solution {
public:
    bool isPowerOfThree(int n) {
        return std::fmod(std::log10(n) / std::log10(3), 1) == 0;
    }
};