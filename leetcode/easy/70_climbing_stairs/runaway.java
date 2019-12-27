// https://leetcode.com/problems/climbing-stairs/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Climbing Stairs.
// Memory Usage: 33.1 MB, less than 5.26% of Java online submissions for Climbing Stairs.

class Solution {
    public int climbStairs(int n) {
        int[] memo = new int[n];
        return helper(0, n, memo);
    }

    private int helper(int i, int n, int[] memo) {
        if (i > n) return 0;
        else if (i == n) return 1;
        else if (memo[i] > 0) return memo[i];

        memo[i] = helper(i + 1, n, memo) + helper(i + 2, n, memo);
        return memo[i];
    }
}