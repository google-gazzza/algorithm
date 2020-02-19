// https://leetcode.com/problems/excel-sheet-column-number/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Excel Sheet Column Number.
// Memory Usage: 41.6 MB, less than 5.88% of Java online submissions for Excel Sheet Column Number.

class Solution {
    public int titleToNumber(String s) {
        int result = 0;
        int len = s.length();
        for (int i = 0; i < len; i++) {
            int n = s.charAt(i) - 64;
            result += (int)Math.pow(26, len - i - 1) * n;
        }
        return result;
    }
}