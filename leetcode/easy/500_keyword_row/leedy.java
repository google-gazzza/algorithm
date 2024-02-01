//https://leetcode.com/problems/keyboard-row/
//Runtime: 3 ms, faster than 14.85% of Java online submissions for Keyboard Row.
//Memory Usage: 37.7 MB, less than 7.69% of Java online submissions for Keyboard Row.

class Solution {
    public String[] findWords(String[] words) {
        List<Set> sets = new ArrayList<>();
        List<String> result = new ArrayList<>();

        Set<String> set1 = new HashSet<String>(Arrays.asList("q","w","e","r","t","y","u","i","o","p"));
        Set<String> set2 = new HashSet<String>(Arrays.asList("a","s","d","f","g","h","j","k","l"));
        Set<String> set3 = new HashSet<String>(Arrays.asList("z","x","c","v","b","n","m"));
        sets.add(set1);
        sets.add(set2);
        sets.add(set3);

        for(int i =0; i<words.length; i++){
            String[] word = words[i].toLowerCase().split("");

            for(Set keySet : sets){
                boolean tf = true;
                for(int j=0; j<word.length;j++){
                    if(keySet.contains(word[j]) && j==word.length-1 && tf== true){
                        result.add(words[i]);
                    }else if(!keySet.contains(word[j])){
                        tf = false;
                    }
                }
            }
        }
        return result.toArray(new String[result.size()]);
    }
}
