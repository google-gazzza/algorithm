/**
 https://leetcode.com/problems/arithmetic-subarrays/
 runtime:16ms
 memroy:45.23mb
 */
class Solution {
    public List<Boolean> checkArithmeticSubarrays(int[] nums, int[] l, int[] r) {
        List<Boolean> answer = new ArrayList<>();
        for(int i=0;i<l.length;i++){
            int start = l[i];
            int end = r[i];
            int len = end-start+1;
            int[] subArr = new int[end-start+1];
            boolean isArithmetic = true;
            for(int j=0;j<len;j++){
                subArr[j]=nums[j+start];
            }
            Arrays.sort(subArr);
            for(int j=1;j<len-1;j++){
                if(subArr[j+1] - subArr[j] != subArr[1]-subArr[0]){
                    isArithmetic = false;
                    break;
                }
            }
            answer.add(isArithmetic);

        }
        return answer;
    }
}