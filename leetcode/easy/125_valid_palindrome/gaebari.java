// https://leetcode.com/problems/valid-palindrome
// Runtime: 952 ms, faster than 5.01% of Java online submissions for Valid Palindrome.
// Memory Usage: 40.2 MB, less than 19.64% of Java online submissions for Valid Palindrome.
class Solution {
    public boolean isPalindrome(String s) {
        String ss = "";
        for (int i = 0; i < s.length(); i++) {
            char charAt = s.charAt(i);
            if (Character.isLetter(charAt) || Character.isDigit(charAt)) {
                ss += Character.toLowerCase(charAt);
            }
        }
        int mid = ss.length() / 2;
        for (int i = 0; i < mid; i++) {
            if (ss.charAt(i) != ss.charAt(ss.length() - (i + 1))) return false;
        }
        return true;
    }
}