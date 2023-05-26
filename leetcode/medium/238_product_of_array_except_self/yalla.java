// https://leetcode.com/problems/product-of-array-except-self/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Product of Array Except Self.
// Memory Usage: 50.3 MB, less than 44.29% of Java online submissions for Product of Array Except Self.
class Solution {
	public int[] productExceptSelf(int[] nums) {
		// 자기 자신을 제외하고 다른수들을 곱한 값
		// 자신을 제외하고 좌측을 곱하고, 우측을 곱하게 계산
		int[] ret = new int[nums.length];

		//좌측 곱
		for (int i = 0, temp = 1; i < nums.length; i++) {
			ret[i] = temp;
			temp = temp * nums[i];
		}

		//우측 곱
		for(int i = nums.length -1, temp = 1; i >= 0; i--){
			ret[i] = ret[i] * temp;
			temp = temp * nums[i];
		}

		return ret;
	}
}