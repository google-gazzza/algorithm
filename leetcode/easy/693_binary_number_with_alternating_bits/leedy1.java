/*
* https://leetcode.com/problems/binary-number-with-alternating-bits/
* Runtime: 1 ms, faster than 14.30% of Java online submissions for Binary Number with Alternating Bits.
* Memory Usage: 36.5 MB, less than 12.50% of Java online submissions for Binary Number with Alternating Bits.
/

class Solution {
    public boolean hasAlternatingBits(int n) {
        
        boolean result = true;
        char[] bitChars = Integer.toBinaryString(n).toCharArray();
        Stack<Character> stack = new Stack<>();
       
        for(char bit : bitChars){
            if(!stack.empty()){
                if(stack.pop() == bit) return false;
            }
            stack.push(bit);
        }
        return result;
    }
}
