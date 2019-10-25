// https://leetcode.com/problems/sum-of-two-integers/
// Runtime: 4 ms, faster than 50.58% of C++ online submissions for Sum of Two Integers.
// Memory Usage: 8.1 MB, less than 100.00% of C++ online submissions for Sum of Two Integers.

class Solution {
public:
    int getSum(int a, int b) {
        if (b == 0) return a;
        else return getSum(a ^ b, ((a & b) & 0xffffffff) << 1);
    }
};
