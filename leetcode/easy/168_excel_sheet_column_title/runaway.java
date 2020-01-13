// https://leetcode.com/problems/excel-sheet-column-title/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Excel Sheet Column Title.
// Memory Usage: 34.3 MB, less than 100.00% of Java online submissions for Excel Sheet Column Title.

class Solution {
    public String convertToTitle(int n) {       
        StringBuilder sb = new StringBuilder();
        while (n > 0) {
            n--;
            int v = n % 26;
            n = n / 26;
            sb.insert(0, (char)(65 + v));
        }
        return sb.toString();
    }
}