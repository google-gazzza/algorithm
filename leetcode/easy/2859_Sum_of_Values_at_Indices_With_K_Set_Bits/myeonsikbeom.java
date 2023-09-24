/**
 https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/
 Runtime: 3ms
 Memory: 43.1MB
 */
class Solution {
    public boolean isKBits(int n,int k){

        int param = n;
        int count = 0;
        if(n==0) {
            return k == 0;
        }
        while(param != 1){

            if(param%2==1){
                count++;
            }
            param = (int)param/2;

        }
        if(param == 1){
            count += 1;
        }
        return k == count;
    }
    public int sumIndicesWithKSetBits(List<Integer> nums, int k) {
        int result = 0;
        for(int i=0;i<nums.size();i++){
            if(isKBits(i,k)){
                result += nums.get(i);
            }
        }
        return result;
    }
}