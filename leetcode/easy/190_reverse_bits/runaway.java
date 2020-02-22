// https://leetcode.com/problems/reverse-bits/
// Runtime: 1 ms, faster than 99.96% of Java online submissions for Reverse Bits.
// Memory Usage: 47.7 MB, less than 7.32% of Java online submissions for Reverse Bits.

public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result = result << 1;
            result = result | (n & 1);
            n = n >> 1;
        }
        return result;
    }
}