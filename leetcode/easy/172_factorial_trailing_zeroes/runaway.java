// https://leetcode.com/problems/factorial-trailing-zeroes/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Factorial Trailing Zeroes.
// Memory Usage: 36.3 MB, less than 7.69% of Java online submissions for Factorial Trailing Zeroes.

class Solution {
    public int trailingZeroes(int n) {
        int result = 0;
        while (n > 0) {
            result += n / 5;
            n /= 5;
        }
        return result;
    }
}