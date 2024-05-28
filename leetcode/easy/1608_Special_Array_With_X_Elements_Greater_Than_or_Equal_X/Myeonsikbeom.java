/*
    runtime: 1ms
    memory: 41.04mb
 */
class Solution {
    public int specialArray(int[] nums) {

        int len = nums.length;
        int answer = 0;
        for(int i=0;i<=len;i++){
            int cnt = 0;
            for(int j=0;j<len;j++){
                if(i <=nums[j]){
                    cnt++;
                }
            }
            if(cnt == i){
                answer = i;
            }
        }
        return answer == 0 ? -1 : answer;
    }
}
