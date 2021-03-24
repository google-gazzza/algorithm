// https://leetcode.com/problems/assign-cookies/submissions/
// Runtime: 6 ms, faster than 98.84% of Java online submissions for Assign Cookies.
// Memory Usage: 39.6 MB, less than 70.88% of Java online submissions for Assign Cookies.
class Solution {
	public int findContentChildren(int[] g, int[] s) {
		Arrays.sort(g);
		Arrays.sort(s);

		int i = 0;
		int j = 0;

		while(i < g.length && j < s.length){
			if(g[i] <= s[j]){
				i++;
			}
			j++;
		}
		return i;
	}
}