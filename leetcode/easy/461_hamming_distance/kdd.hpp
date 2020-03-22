// https://leetcode.com/problems/hamming-distance/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Hamming Distance.
// Memory Usage: 8.3 MB, less than 59.09% of C++ online submissions for Hamming Distance.

class Solution {
public:
    int hammingDistance(int x, int y) {
        int result = 0;
        auto dist = x ^ y;
        while (dist != 0) {
            dist &= dist - 1;
            ++result;
        };
        
        return result;
    }
};