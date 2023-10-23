"""
https://leetcode.com/problems/power-of-four/
Runtime 1ms Beats 76.18% of users with Java
Memory 39.54MB Beats 45.72%of users with Java
"""

class Solution {
    public boolean isPowerOfFour(int n) {
        if (n == 0) {
            return false;
        }
        while (n % 4 == 0) {
            n /= 4;
        }
        return n == 1;
    }
}
