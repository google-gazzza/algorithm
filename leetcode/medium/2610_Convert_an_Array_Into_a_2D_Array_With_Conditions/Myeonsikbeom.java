/**
 https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/
 runtime:2ms
 memory:44.46MB
 */
class Solution {
    public List<List<Integer>> findMatrix(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        int[] freq = new int[201];
        int resultLength = 0;
        for(int num:nums){
            freq[num]++;
            resultLength = Math.max(resultLength,freq[num]);
        }
        for(int i=0;i<resultLength;i++){
            result.add(new ArrayList<>());
        }
        for(int i=0;i<=nums.length;i++){
            while(freq[i]-- > 0){
                result.get(freq[i]).add(i);
            }
        }
        return result;
    }
}