// https://leetcode.com/problems/different-ways-to-add-parentheses/
// Runtime: 1 ms, faster than 99.35% of Java online submissions for Different Ways to Add Parentheses.
// Memory Usage: 38.9 MB, less than 61.09% of Java online submissions for Different Ways to Add Parentheses.
class Solution {
	public List<Integer> diffWaysToCompute(String expression) {
		List<Integer> ret = new ArrayList<>();
		if(expression == null || expression.length() == 0) return Collections.emptyList();

		for (int i = 0; i < expression.length(); i++) {
			char c = expression.charAt(i);
			if(c == '+' || c == '-' || c == '*'){
				String front = expression.substring(0, i);
				String back = expression.substring(i + 1);
				List<Integer> left = diffWaysToCompute(front);
				List<Integer> right = diffWaysToCompute(back);

				for (int leftVal : left) {
					for (int rightVal : right) {
						if(c == '+'){
							ret.add(leftVal + rightVal);
						}else if(c == '-'){
							ret.add(leftVal - rightVal);
						}else if(c == '*'){
							ret.add(leftVal * rightVal);
						}
					}
				}
			}
		}

		if(ret.size() == 0) ret.add(Integer.parseInt(expression));
		return ret;
	}
}