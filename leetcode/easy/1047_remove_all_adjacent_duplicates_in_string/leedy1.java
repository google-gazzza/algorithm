//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string
//Runtime: 333 ms, faster than 9.48% of Java online submissions for Remove All Adjacent Duplicates In String.
//Memory Usage: 42 MB, less than 100.00% of Java online submissions for Remove All Adjacent Duplicates In String

class Solution {
    public String removeDuplicates(String S) {
         while (true){
            char[] temp = S.toCharArray();
            int duplecate = 0;
            for(int i = 0; i<temp.length-1; i++){
                if(temp[i]==temp[i+1]){
                    S = S.substring(0,i)+S.substring(i+2, S.length());
                    duplecate++;
                    break;
                }
            }
            if(duplecate == 0) break;
        }
        return S;
    }
}
