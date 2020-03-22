// https://leetcode.com/problems/happy-number/
// Runtime: 1 ms, faster than 97.86% of Java online submissions for Happy Number.
// Memory Usage: 36.4 MB, less than 6.06% of Java online submissions for Happy Number.

class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<Integer>();
        while (!set.contains(n)) {
            if (n == 1) return true;
            
            set.add(n);
            n = getNextNumber(n);
        }
        return false;
    }
    int getNextNumber(int n) {
        int result = 0;
        while (n > 0) {
            result += (int) Math.pow(n % 10, 2);
            n /= 10;
        }
        return result;
    }
}