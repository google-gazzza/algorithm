// https://leetcode.com/problems/daily-temperatures/
// Runtime: 282 ms, faster than 16.14% of Java online submissions for Daily Temperatures.
// Memory Usage: 47.1 MB, less than 78.59% of Java online submissions for Daily Temperatures.

class Solution {
	public int[] dailyTemperatures(int[] T) {
		if(T == null || T.length == 0) return T;
		Stack<Integer> stack = new Stack<>();
		int[] ret = new int[T.length];

		for (int i = 0; i < T.length; i++) {
			while(!stack.isEmpty() && T[i] > T[stack.peek()]){
				int idx = stack.pop();
				ret[idx] = i - idx;
			}
			stack.push(i);
		}
		return ret;
	}
}