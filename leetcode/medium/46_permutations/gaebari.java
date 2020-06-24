//https://leetcode.com/problems/permutations/
//Runtime: 2 ms, faster than 44.46% of Java online submissions for Permutations.
//Memory Usage: 39.4 MB, less than 11.35% of Java online submissions for Permutations.

class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        backTracker(list, new ArrayList<Integer>(), nums);
        return list;
    }

    private void backTracker(List<List<Integer>> list, List<Integer> tmpList, int[] nums) {
        if (tmpList.size() == nums.length) {
            list.add(new ArrayList<>(tmpList));
        } else {
            for(int i=0; i < nums.length; i++) {
                if(tmpList.contains(nums[i])) continue;
                tmpList.add(nums[i]);
                backTracker(list, tmpList, nums);
                tmpList.remove(tmpList.size() -1);
            }
        }
    }
}