//https://leetcode.com/problems/create-target-array-in-the-given-order
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Create Target Array in the Given Order.
//Memory Usage: 38.4 MB, less than 100.00% of Java online submissions for Create Target Array in the Given Order.
class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        int ret[] = new int[nums.length];
        List<Integer> list = new ArrayList<>();
        for(int i=0; i< nums.length; i++){
            list.add(index[i],nums[i]);
        }

        for(int i=0; i< nums.length; i++){
            ret[i] = list.get(i);
        }
        return ret;
    }
}