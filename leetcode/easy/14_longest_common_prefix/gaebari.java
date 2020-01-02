// https://leetcode.com/problems/longest-common-prefix
// Runtime: 261 ms, faster than 6.87% of Java online submissions for Longest Common Prefix.
// Memory Usage: 40.6 MB, less than 5.26% of Java online submissions for Longest Common Prefix.

class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = 0;

        if (strs.length == 0) {
            return "";
        }

        ArrayList<String> list = new ArrayList<String>();

        int count = 0;
        for (int i = 0; i < strs[0].length(); i++) {
            count = 0;
            for (String j : strs) {
                if (j.length()-1 >= i &&strs[0].split("")[i].equals( j.split("")[i])) {
                    count++;
                }
            }

            if (count == strs.length) {
                n++;
            } else{
                break;
            }
        }
        return strs[0].substring(0, n);
    }
}