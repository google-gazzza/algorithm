//https://leetcode.com/problems/length-of-last-word/submissions/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Length of Last Word.
//Memory Usage: 37.9 MB, less than 7.57% of Java online submissions for Length of Last Word.
class Solution {
    public int lengthOfLastWord(String s) {
        String[] sArray = s.split(" ");
        if(sArray.length == 0) return 0;
        return sArray[sArray.length-1].length();
    }
}