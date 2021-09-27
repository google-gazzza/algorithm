// https://leetcode.com/problems/power-of-two/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Power of Two.
// Memory Usage: 36.8 MB, less than 7.32% of Java online submissions for Power of Two.

class Solution {
    public boolean isPowerOfTwo(int n) {
        if (n < 0)
            return false;
        
        int count = 0;
        for (int i = 0; i < 32; i++) {
            count += n & 1;
            n >>= 1;
        }
        return count == 1;
    }
}