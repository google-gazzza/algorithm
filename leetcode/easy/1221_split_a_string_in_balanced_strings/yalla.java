//https://leetcode.com/problems/split-a-string-in-balanced-strings
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Split a String in Balanced Strings.
//Memory Usage: 36.9 MB, less than 100.00% of Java online submissions for Split a String in Balanced Strings.
class Solution {
    public int balancedStringSplit(String s) {
        int count = 0;
        int ret = 0;
        for(char c : s.toCharArray()){
            if(c == 'L') count++;
            if(c == 'R') count--;
            if(count == 0) ret++;
        }
        return ret;
    }
}