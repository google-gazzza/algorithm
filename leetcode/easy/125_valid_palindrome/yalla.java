// https://leetcode.com/problems/valid-palindrome/submissions/
// Runtime: 6 ms, faster than 43.29% of Java online submissions for Valid Palindrome.
// Memory Usage: 47.1 MB, less than 5.35% of Java online submissions for Valid Palindrome.
class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        int start = 0;
        int end = s.length() -1;

        while(start < end){
            if(!Character.isLetterOrDigit(s.charAt(start))){
                start++;
                continue;
            }

            if(!Character.isLetterOrDigit(s.charAt(end))){
                end--;
                continue;
            }

            if(s.charAt(start) != s.charAt(end)) return false;

            start++;
            end--;
        }
        return true;
    }
}