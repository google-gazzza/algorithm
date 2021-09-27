//https://leetcode.com/problems/longest-substring-without-repeating-characters
//Runtime: 6 ms, faster than 82.54% of Java online submissions for Longest Substring Without Repeating Characters.
//Memory Usage: 41.6 MB, less than 5.20% of Java online submissions for Longest Substring Without Repeating Characters.
import java.util.*;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> hash = new HashMap<Character, Integer>();
        int max = 0, pos = 0;
        for (int i = 0; i < s.length(); i++) {

            if(hash.get(s.charAt(i)) != null) {
                pos = Math.max(pos, hash.get(s.charAt(i)) +1);
            }
            hash.put(s.charAt(i), i);
            max = Math.max(max, i-pos+1);
        }
        return max;
    }
}