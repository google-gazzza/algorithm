
/*
https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
Runtime : 3 ms
Memory : 41.2 MB
 */
class Solution {
    public int countPairs(List<Integer> nums, int target) {
        int start=0,end=1,answer=0;
        while(start<end && end <= nums.size()-1){
            if(Integer.valueOf(nums.get(start))+Integer.valueOf(nums.get(end)) < target){
                answer++;
            }
            end++;
            if(end == nums.size()){
                start+=1;
                end=start+1;
            }
        }
        return answer;
    }
}