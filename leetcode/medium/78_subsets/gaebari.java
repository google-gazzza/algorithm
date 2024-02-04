//https://leetcode.com/problems/subsets
//Runtime: 1 ms, faster than 54.79% of Java online submissions for Subsets.
//Memory Usage: 40 MB, less than 5.74% of Java online submissions for Subsets.
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        Arrays.sort(nums);
        backTracker(result, new ArrayList<>(), nums, 0);
        return result;
    }

    private void backTracker(List<List<Integer>> list, List<Integer> tmpList, int[] nums, int start) {
        list.add(new ArrayList<>(tmpList));
        for(int i = start; i < nums.length; i++) {
            if ( tmpList.indexOf(nums[i]) > -1) {
                break;
            }
            tmpList.add(nums[i]);
            backTracker(list, tmpList, nums, start +1);
            tmpList.remove(tmpList.indexOf(nums[i]));
        }
    }
}