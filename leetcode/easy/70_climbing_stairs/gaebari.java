// https://leetcode.com/problems/climbing-stairs
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Climbing Stairs.
// Memory Usage: 32.9 MB, less than 5.26% of Java online submissions for Climbing Stairs.

class Solution {
    public int climbStairs(int n) {
        if (n == 0 ) {
            return 0;
        }

        int a = 0;
        int b = 1;
        int tmp = 0;

        for (int i = 0; i < n; i++) {
            tmp = b;
            b = b + a;
            a = tmp;
        }

        return b;
    }
}