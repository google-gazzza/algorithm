//https://leetcode.com/problems/split-a-string-in-balanced-strings
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Split a String in Balanced Strings.
//Memory Usage: 34.1 MB, less than 100.00% of Java online submissions for Split a String in Balanced Strings.
class Solution {
    public int balancedStringSplit(String s) {

        int rCount = 0;
        int lCount = 0;
        int groupInteger = 0;

        for (int i = 0; i < s.length(); i++) {

            if ('R' == s.charAt(i)) {
                rCount++;
            } else {
                lCount++;
            }

            if (rCount == lCount) {

                groupInteger++;
                rCount = 0;
                lCount = 0;
            }
        }

        return groupInteger;
    }
}