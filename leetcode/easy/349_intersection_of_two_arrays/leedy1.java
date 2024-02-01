/*
* https://leetcode.com/problems/intersection-of-two-arrays/
* Runtime: 5 ms, faster than 20.68% of Java online submissions for Intersection of Two Arrays.
* Memory Usage: 39.6 MB, less than 6.75% of Java online submissions for Intersection of Two Arrays.
*/

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> nums1Set = new HashSet<>();
        Set<Integer> intersect = new HashSet<>();
        for(int num : nums1){
            nums1Set.add(num);
        }
        for(int num: nums2){
            if(nums1Set.contains(num)){
                intersect.add(num);
            }
        }
        return intersect.stream().mapToInt(Number::intValue).toArray();
    }
}
