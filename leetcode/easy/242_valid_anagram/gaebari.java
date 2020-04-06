//https://leetcode.com/problems/valid-anagram
//Runtime: 3 ms, faster than 87.75% of Java online submissions for Valid Anagram.
//Memory Usage: 39.2 MB, less than 19.35% of Java online submissions for Valid Anagram.
class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length() ) return false;
        int[] nList = new int[26];

        for (int i = 0; i < s.length(); i++) {
            nList[s.charAt(i) - 'a']++;
            nList[t.charAt(i) - 'a']--;
        }
        for(int j = 0; j < nList.length; j++) {
            if (nList[j] != 0) return false;
        }

        return true;
    }
}
