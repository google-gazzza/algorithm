// https://leetcode.com/problems/jewels-and-stones/
// Runtime: 1 ms, faster than 90.50% of Java online submissions for Jewels and Stones.
// Memory Usage: 35.4 MB, less than 96.46% of Java online submissions for Jewels and Stones.
class Solution {
    public int numJewelsInStones(String J, String S) {

        final HashMap<Character, Boolean> jewelMap = new HashMap<>();
        int jewelCount = 0;

        for (int i = 0; i < J.length(); i++) {
            jewelMap.put(J.charAt(i), true);
        }

        for (int i = 0; i < S.length(); i++) {
            if (jewelMap.containsKey(S.charAt(i)))
                jewelCount++;
        }

        return jewelCount;
    }
}