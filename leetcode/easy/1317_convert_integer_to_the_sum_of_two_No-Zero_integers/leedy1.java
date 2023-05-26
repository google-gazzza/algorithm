//https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
//Runtime: 1 ms, faster than 45.55% of Java online submissions for Convert Integer to the Sum of Two No-Zero Integers.
//Memory Usage: 37.4 MB, less than 41.58% of Java online submissions for Convert Integer to the Sum of Two No-Zero Integers.


class Solution {
    public int[] getNoZeroIntegers(int n) {
        
        int[] result = new int[2];
        int num ;
        for(num = 1; num < n; num++ ){
           if(!String.valueOf(num).contains("0") && !String.valueOf(n-num).contains("0")) break;
        }
        result[0] = num; result[1] = n-num;
        return result;
    }
}
