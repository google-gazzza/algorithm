//https://leetcode.com/problems/shortest-completing-word/
//Runtime: 5 ms, faster than 57.79% of Java online submissions for Shortest Completing Word.
//Memory Usage: 39.8 MB, less than 76.04% of Java online submissions for Shortest Completing Word.

class Solution {
    public String shortestCompletingWord(String licensePlate, String[] words) {
         licensePlate = licensePlate.toLowerCase();String result = "abcdefghijklmnotqrstuvw";

        licensePlate = licensePlate.toLowerCase();
        char[] tempArr = licensePlate.toCharArray();
        List<Character> charList = new ArrayList<>();
        for(char ch : tempArr){
           if( 96 < ch && ch < 173){
               charList.add(ch);
           }
        }
        StringBuilder sb = null;

        for(String word : words){
            boolean isInclude = true;
            sb = new StringBuilder();
            sb.append(word);
            for(char ch : charList){
                int idx = sb.indexOf(String.valueOf(ch));
                if(idx == -1){
                    isInclude = false; break;
                }else{
                    sb.deleteCharAt(idx);
                }
            }
           if(isInclude == true){
               if(result.length() > word.length())   result = word;
           }
        }
        return result;
    }
}
