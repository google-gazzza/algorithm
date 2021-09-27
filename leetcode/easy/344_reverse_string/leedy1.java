//https://leetcode.com/problems/reverse-string/
//Runtime: 1 ms, faster than 99.97% of Java online submissions for Reverse String.
//Memory Usage: 43.2 MB, less than 99.41% of Java online submissions for Reverse String

class Solution {
    public void reverseString(char[] s) {
        for(int i=0,j=s.length-1; i<s.length/2; i++, j--){
            char temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        }
    }
}.
