// https://leetcode.com/problems/excel-sheet-column-number
// Runtime: 4 ms, faster than 5.66% of Java online submissions for Excel Sheet Column Number.
// Memory Usage: 42.3 MB, less than 5.88% of Java online submissions for Excel Sheet Column Number.
class Solution {
    public int titleToNumber(String s) {
        int result = 0;
        int count = s.length() -1;

        for (char c: s.toCharArray()) {
            result += (Math.pow(26, count) * (c - 'A' +1)) > 0 ? (Math.pow(26, count) * (c - 'A' +1)) : (c - 'A' +1);
            count--;
        }
        return result;
    }
}