//https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/
//Runtime: 8 ms, faster than 44.01% of Java online submissions for Reverse Words in a String III.
//Memory Usage: 46.7 MB, less than 5.26% of Java online submissions for Reverse Words in a String III

class Solution {
    public String reverseWords(String s) {
       StringBuilder sb = new StringBuilder();
       String[] arr = s.split(" ");
       for(int i = 0 ; i<arr.length; i++){
           char[] temp = arr[i].toCharArray();
           for(int j = temp.length-1; j>= 0; j--){
               sb.append(temp[j]);
           }
           if(i!=arr.length-1)sb.append(" ");
       }
       return new String(sb);
    }
}
