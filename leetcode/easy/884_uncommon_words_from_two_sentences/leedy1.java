//https://leetcode.com/problems/uncommon-words-from-two-sentences/
//Runtime: 1 ms, faster than 100.00% of Java online submissions for Uncommon Words from Two Sentences.
//Memory Usage: 37.6 MB, less than 20.00% of Java online submissions for Uncommon Words from Two Sentences.

class Solution {
    public String[] uncommonFromSentences(String A, String B) {
        Map<String, Integer> map = new HashMap<>();
        String[] a = A.split(" ");
        String[] b = B.split(" ");
        for(String str : a){
            map.put(str, map.getOrDefault(str, 0)+1);
        }
        for(String str : b){
            map.put(str, map.getOrDefault(str, 0)+1);
        }
        List<String> result = new ArrayList<>();
        for(String key : map.keySet()){
            if(map.get(key) == 1) result.add(key);
        }
        return result.toArray(new String[]{});
    }
}
