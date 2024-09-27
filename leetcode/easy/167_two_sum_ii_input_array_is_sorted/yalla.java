// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 39.4 MB, less than 43.08% of Java online submissions for Two Sum II - Input array is sorted.
class Solution {
	public int[] twoSum(int[] numbers, int target) {
		int[] ret = new int[2];
		if (numbers.length == 2){
			ret[0] = numbers[0] +1;
			ret[1] = numbers[1] +1;
		}
		int start = 0;
		int end = numbers.length -1;

		while(start < end){
			int temp = numbers[start] + numbers[end];

			if(temp == target){
				ret[0] = start +1;
				ret[1] = end +1;
				break;
			}else if(temp > target){
				end--;
			}else{
				start++;
			}
		}
		return ret;
	}
}