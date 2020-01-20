// https://leetcode.com/problems/excel-sheet-column-title
// Runtime: 7 ms, faster than 100.00% of Java online submissions for Excel Sheet Column Title.
// Memory Usage: 41 MB, less than 5.13% of Java online submissions for Excel Sheet Column Title.
class Solution {
    public String convertToTitle(int n) {
        String result = "";
        while (n > 0)   {
            result = (char)('A' + ((--n) % 26) ) + result;
            n /= 26;
        }
        return result;
    }
}