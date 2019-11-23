// https://leetcode.com/problems/factorial-trailing-zeroes/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Factorial Trailing Zeroes.
// Memory Usage: 8.3 MB, less than 71.43% of C++ online submissions for Factorial Trailing Zeroes.

class Solution {
public:
    int trailingZeroes(int n) {
        int result = 0;
        while (n != 0) {
            n /= 5;
            result += n;
        };
        return result;
    }
};