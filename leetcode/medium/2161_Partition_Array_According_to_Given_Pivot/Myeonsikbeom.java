/**
 https://leetcode.com/problems/partition-array-according-to-given-pivot/submissions/1083368807/
 Runtime: 4 ms
 Memory: 62.6 MB
 */
class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        int[] answer = new int[nums.length];
        int index = 0;
        for(int num:nums){
            if(num < pivot){
                answer[index] = num;
                index++;
            }
        }
        for(int num:nums){
            if(num == pivot){
                answer[index] = num;
                index++;
            }
        }
        for(int num:nums){
            if(num > pivot){
                answer[index] = num;
                index++;
            }
        }
        return answer;
    }
}