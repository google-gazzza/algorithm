// https://leetcode.com/problems/largest-number/submissions/
// Runtime: 6 ms, faster than 45.61% of Java online submissions for Largest Number.
// Memory Usage: 38.7 MB, less than 47.52% of Java online submissions for Largest Number.
class Solution {
	public String largestNumber(int[] nums) {
		List<String> temp = new ArrayList<>();
		for (int num : nums) {
			temp.add(Integer.toString(num));
		}

		temp.sort((a,b) -> (int)(Long.parseLong(b+a) - Long.parseLong(a+b)));

		StringBuilder sb = new StringBuilder();
		for (String s : temp) {
			sb.append(s);
		}

		return sb.toString().startsWith("0") ? "0" : sb.toString();
	}
}