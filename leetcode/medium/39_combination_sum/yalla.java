// https://leetcode.com/problems/combination-sum
// Runtime: 3 ms, faster than 79.74% of Java online submissions for Combination Sum.
// Memory Usage: 39.1 MB, less than 76.91% of Java online submissions for Combination Sum.
class Solution {
	public List<List<Integer>> combinationSum(int[] candidates, int target) {
		List<List<Integer>> ret = new ArrayList<>();
		Arrays.sort(candidates);
		backtracking(ret, candidates, new ArrayList<>(), target, 0);
		return ret;
	}

	private void backtracking(List<List<Integer>> ret, int[] candidates, List<Integer> inner, int target, int position) {
		if(target < -1) return;
		if(target == 0){
			ret.add(new ArrayList<>(inner));
		}

		for (int i = position; i < candidates.length; i++) {
			if(target - candidates[i] < 0) continue;
			inner.add(candidates[i]);
			backtracking(ret, candidates, inner, target - candidates[i], i);
			inner.remove(inner.size() -1);
		}

	}
}
