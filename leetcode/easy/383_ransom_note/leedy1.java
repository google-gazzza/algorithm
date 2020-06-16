//https://leetcode.com/problems/ransom-note/
//Runtime: 13 ms, faster than 30.62% of Java online submissions for Ransom Note.
//Memory Usage: 40.4 MB, less than 24.24% of Java online submissions for Ransom Note.

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> ranMap = new HashMap<>();
        HashMap<Character, Integer> magMap = new HashMap<>();
        for(char ran : ransomNote.toCharArray() ){
            ranMap.put(ran, ranMap.getOrDefault(ran, 0)+1);
        }
        for(char mag : magazine.toCharArray()){
            magMap.put(mag, magMap.getOrDefault(mag, 0)+1);
        }

        if(magMap.size()<ranMap.size()) return false;
        for(char ch : ranMap.keySet()){
            if(!magMap.containsKey(ch)) return false;
            if(magMap.get(ch) < ranMap.get(ch)) return false;
        }

        return true;
    }
}
