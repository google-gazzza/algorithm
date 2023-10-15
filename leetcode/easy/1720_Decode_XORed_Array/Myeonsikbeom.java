/**
 https://leetcode.com/problems/decode-xored-array/
 Runtime: 2ms
 Memroy: 44.8MB
 */
class Solution {
    public int[] decode(int[] encoded, int first) {
        int len = encoded.length;
        int[] result = new int[len+1];
        result[0]=first;
        for(int i=1;i<=encoded.length;i++){
            result[i]=encoded[i-1]^result[i-1];
        }
        return result;
    }
}