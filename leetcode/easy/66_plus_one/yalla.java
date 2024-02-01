//https://leetcode.com/problems/plus-one/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Plus One.
//Memory Usage: 37.8 MB, less than 5.64% of Java online submissions for Plus One.
class Solution {
    public int[] plusOne(int[] digits) {
        if(digits.length == 0) return new int[0];

        int upper = 1;
        for(int i = digits.length-1; i >= 0; i--){
            int sum = digits[i] + upper;
            digits[i] = sum % 10;
            upper = sum / 10;

            if(upper == 0) return digits;
        }

        if(upper == 1){
            int[] result = new int[digits.length+1];
            result[0] = 1;
            for(int i = 1; i < digits.length + 1; i++){
                result[i] = digits[i-1];
            }
            return result;
        }else{
            return digits;
        }
    }
}