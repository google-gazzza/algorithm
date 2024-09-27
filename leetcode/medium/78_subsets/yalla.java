// https://leetcode.com/problems/subsets/
// Runtime: 1 ms, faster than 64.24% of Java online submissions for Subsets.
// Memory Usage: 39.1 MB, less than 84.60% of Java online submissions for Subsets.
class Solution {
	public List<List<Integer>> subsets(int[] nums) {
		List<List<Integer>> ret = new ArrayList<>();
		Arrays.sort(nums);
		backTrack(ret, nums, new ArrayList<>(), 0);
		return ret;
	}

	private void backTrack(List<List<Integer>> ret, int[] nums, List<Integer> arr, int position) {
		ret.add(new ArrayList<>(arr));
		for (int i = position; i < nums.length; i++) {
			arr.add(nums[i]);
			backTrack(ret, nums, arr, i+1);
			arr.remove(arr.size()-1);
		}
	}
}