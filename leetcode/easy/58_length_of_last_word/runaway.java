// https://leetcode.com/problems/length-of-last-word
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Length of Last Word.
// Memory Usage: 36 MB, less than 100.00% of Java online submissions for Length of Last Word.

class Solution {
    public int lengthOfLastWord(String s) {
        int count = 0;
        for(int i = s.length() - 1; i >= 0 ; i--) {
            if (s.charAt(i) == ' ') {
                if (count > 0)break;
            } else {
                count++;
            }
        }
        return count;
    }
}