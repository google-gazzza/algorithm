/**
 https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
 Runtime:124ms
 Memory:44.95mb
 */
class Solution {
    public int sumCounts(List<Integer> nums) {
        int answer = 0;
        // 효율적으로푼 문제
        //      for(int i=0;i<nums.size();i++){
        //        HashSet<Integer>hs=new HashSet<>();
        //        for(int j=i;j<nums.size();j++){
        //            hs.add(nums.get(j));
        //            answer+=(hs.size()*hs.size());
        //        }
        //    }
        //  내가 푼 내용
        int start=0,end=0;
        while(start<nums.size()){
            int distinctCnt = 0;
            Set<Integer> set = new HashSet<>();
            for(int i=start;i<=end;i++){
                set.add(nums.get(i));
            }
            answer += Math.pow(set.size(),2);
            end++;
            if(end == nums.size()){
                start+=1;
                end = start;
            }
        }
        return answer;
    }
}