/**
 https://leetcode.com/problems/find-common-elements-between-two-arrays/
 runtime:6ms
 memory:45.85mb
 */
class Solution {
    public int[] findIntersectionValues(int[] nums1, int[] nums2) {
        int[] answer = new int[2];

        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        for(int num:nums1){
            set1.add(num);
        }
        for(int num:nums2){
            set2.add(num);
        }
        for(int i=0;i<nums1.length;i++){
            if(set2.contains(nums1[i])){
                answer[0]++;
            }
        }
        for(int i=0;i<nums2.length;i++){
            if(set1.contains(nums2[i])){
                answer[1]++;
            }
        }
        return  answer;

    }
}