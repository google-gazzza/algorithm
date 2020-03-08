
//https://leetcode.com/problems/unique-number-of-occurrences/
//Runtime: 2 ms, faster than 90.50% of Java online submissions for Unique Number of Occurrences.
//Memory Usage: 36.4 MB, less than 100.00% of Java online submissions for Unique Number of Occurrences.

class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i : arr){
            map.put(i, map.getOrDefault(i,0)+1);
        }

        for(int j : map.keySet()){
            for(int k : map.keySet()){
                if(j!=k){
                    if(map.get(j) == map.get(k)) return false;
                }
            }
        }

        return true;
    }
}
