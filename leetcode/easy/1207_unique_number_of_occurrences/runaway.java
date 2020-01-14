// https://leetcode.com/problems/unique-number-of-occurrences/
// Runtime: 2 ms, faster than 90.37% of Java online submissions for Unique Number of Occurrences.
// Memory Usage: 36.2 MB, less than 100.00% of Java online submissions for Unique Number of Occurrences.

class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int v: arr) {
            if (map.containsKey(v))
                map.put(v, map.get(v) + 1);
            else
                map.put(v, 1);
        }
        
        HashSet<Integer> set = new HashSet<Integer>();
        for (int key: map.keySet()) {
            if (set.contains(map.get(key)))
                return false;
            set.add(map.get(key));
        }
        
        return true;
    }
}