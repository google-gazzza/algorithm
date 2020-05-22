//https://leetcode.com/problems/power-of-two
//Runtime: 1 ms, faster than 100.00% of Java online submissions for Power of Two.
//Memory Usage: 37.1 MB, less than 7.32% of Java online submissions for Power of Two.
class Solution {
    public boolean isPowerOfTwo(int n) {
        while (n>1) {
            if (n % 2 >= 1) return false;
            n /= 2;
        }
        return n == 1;
    }
}