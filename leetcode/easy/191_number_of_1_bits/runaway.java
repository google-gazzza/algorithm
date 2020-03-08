// https://leetcode.com/problems/number-of-1-bits/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Number of 1 Bits.
// Memory Usage: 36.5 MB, less than 5.41% of Java online submissions for Number of 1 Bits.

public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int sum = 0;
        for (int i = 0; i < 32; i++) {
            sum += n & 1;
            n = n >> 1;
        }
        return sum;
    }
}