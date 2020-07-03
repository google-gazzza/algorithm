//https://leetcode.com/problems/reverse-only-letters/submissions/
//Runtime: 1 ms, faster than 34.58% of Java online submissions for Reverse Only Letters.
//Memory Usage: 37.7 MB, less than 8.70% of Java online submissions for Reverse Only Letters.

class Solution {
    public String reverseOnlyLetters(String S) {
        char[] splitString = S.toCharArray();
        Stack<Character> stack = new Stack<>();

        for(char chr : splitString){
            if(Character.isLetter(chr)){
                stack.push(chr);
            }
        }
        for(int i = 0 ; i < splitString.length; i++){
            if(Character.isLetter(splitString[i])){
                splitString[i] = stack.pop();
            }
        }
        return new String(splitString);
    }
}
