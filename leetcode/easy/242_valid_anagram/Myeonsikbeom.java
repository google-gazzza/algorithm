/**
 https://leetcode.com/problems/valid-anagram
 runtime:19ms
 memory:44.42mb
 */
public class Myeonsikbeom {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()){
            return false;
        }
        Map<String,Integer> sset = new HashMap<>();
        for(int i=0;i<s.length();i++){
            String p = Character.toString(s.charAt(i));
            sset.put(p, sset.getOrDefault(p,0)+1);
        }
        for(int i=0;i<t.length();i++){
            String p = Character.toString(t.charAt(i));
            if(sset.getOrDefault(p,0) == 0){
                return false;
            }
            sset.put(p, sset.getOrDefault(p,0)-1);
        }
        return true;
    }
}
