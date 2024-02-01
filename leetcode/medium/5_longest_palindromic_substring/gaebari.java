//https://leetcode.com/problems/longest-palindromic-substring
//Runtime: 27 ms, faster than 53.76% of Java online submissions for Longest Palindromic Substring.
//Memory Usage: 42 MB, less than 6.86% of Java online submissions for Longest Palindromic Substring.
class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;
        String s1, s2, max = "";
        for(int i = 0; i < s.length() -1; i++) {
            s1 = isPalindomic(s, i, i);
            s2 = isPalindomic(s, i, i+1);
            if(s1.length() > max.length()) max = s1;
            if(s2.length() > max.length()) max = s2;
        }
        return max;
    }

    private String isPalindomic(String s, int i, int j) {
        for(; 0 <= i && j < s.length(); i--, j++) {
            if (s.charAt(i) != s.charAt(j)) break;
        }
        return s.substring(i+1, j);
    }
}