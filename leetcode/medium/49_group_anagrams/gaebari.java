//https://leetcode.com/problems/group-anagrams/
//Runtime: 6 ms, faster than 96.85% of Java online submissions for Group Anagrams.
//Memory Usage: 43.2 MB, less than 74.85% of Java online submissions for Group Anagrams.
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if( strs == null || strs.length == 0) return new ArrayList<>();
        Map<String, List<String>> m = new HashMap<String, List<String>>();
        for (int i = 0; i < strs.length; i++) {
            char[] cs = new char[26];
            for (char c : strs[i].toCharArray()) cs[c - 'a']++;
            String cResult = String.valueOf(cs);
            if (!m.containsKey(cResult)) m.put(cResult, new ArrayList<String>());
            m.get(cResult).add(strs[i]);
        }
        return new ArrayList<>(m.values());
    }
}