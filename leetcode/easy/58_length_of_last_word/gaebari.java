// https://leetcode.com/problems/length-of-last-word
// Runtime: 1 ms, faster than 50.01% of Java online submissions for Length of Last Word.
// Memory Usage: 35.8 MB, less than 100.00% of Java online submissions for Length of Last Word.

class Solution {
    public int lengthOfLastWord(String s) {
        String[] result = s.split(" ");
        if (result.length == 0) {
            return 0;
        }
        return result[result.length-1].length();
    }
}
