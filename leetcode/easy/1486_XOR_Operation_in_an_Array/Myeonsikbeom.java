/**
 https://leetcode.com/problems/xor-operation-in-an-array/
 Runtime:0ms
 Memory:38.45MB
 */
class Solution {
    public int xorOperation(int n, int start) {
        int[] nums = new int[n];
        int result = 0;
        for(int i=0;i<n;i++){
            nums[i]=start+i*2;
        }
        for(int i=0;i<nums.length;i++){
            result = result ^ nums[i];
        }
        return result;
    }
}