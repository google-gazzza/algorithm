//https://leetcode.com/problems/occurrences-after-bigram
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Occurrences After Bigram.
//Memory Usage: 37.7 MB, less than 100.00% of Java online submissions for Occurrences After Bigram.

class Solution {
    public String[] findOcurrences(String text, String first, String second) {
        String[] sp = text.split(" ");
        List<String> ls = new ArrayList<>();
        for(int i =0 ; i<sp.length-2;i++){
            if(first.equals(sp[i]) && second.equals(sp[i+1])){
                ls.add(sp[i+2]);
            }
        }
        return ls.toArray(new String[ls.size()]);
    }
}
