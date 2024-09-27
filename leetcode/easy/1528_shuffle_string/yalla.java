// https://leetcode.com/problems/shuffle-string/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Shuffle String.
// Memory Usage: 39.1 MB, less than 49.60% of Java online submissions for Shuffle String.
class Solution {
	public String restoreString(String s, int[] indices) {
		char[] temp = new char[s.length()];
		for (int i = 0; i < indices.length; i++) {
			temp[indices[i]] = s.charAt(i);
		}
		return new String(temp);
	}
}