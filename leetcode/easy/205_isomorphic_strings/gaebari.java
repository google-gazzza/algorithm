//https://leetcode.com/problems/isomorphic-strings/
//Runtime: 4 ms, faster than 88.04% of Java online submissions for Isomorphic Strings.
//Memory Usage: 38.1 MB, less than 49.12% of Java online submissions for Isomorphic Strings.
class Solution {
    public boolean isIsomorphic(String s, String t) {
        int[] m1 = new int[256], m2 = new int[256];
        Arrays.fill(m1, -1);
        Arrays.fill(m2, -1);
        for (int i = 0; i < s.length(); i++) {
            if (m1[s.charAt(i)] != m2[t.charAt(i)]) return false;
            m1[s.charAt(i)] = i;
            m2[t.charAt(i)] = i;
        }
        return true;
    }
}