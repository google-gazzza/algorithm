// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Search in Rotated Sorted Array.
// Memory Usage: 38.1 MB, less than 93.45% of Java online submissions for Search in Rotated Sorted Array.
class Solution {
	public int search(int[] nums, int target) {
		return binarySearch(nums, target, 0, nums.length - 1);
	}

	private int binarySearch(int[] nums, int target, int start, int end) {
		int pivot = (start + end) / 2;

		if (start > end) {
			return -1;
		} else if (nums[pivot] == target) {
			return pivot;
		}

		if (nums[start] <= nums[pivot]) { //값 비교
			if (nums[start] <= target && target < nums[pivot]) { //왼쪽탐색
				return binarySearch(nums, target, start, pivot - 1);
			} else { //오른쪽 탐색
				return binarySearch(nums, target, pivot + 1, end);
			}
		} else {
			if (nums[pivot] < target && target <= nums[end]) {
				return binarySearch(nums, target, pivot + 1, end);
			} else {
				return binarySearch(nums, target, start, pivot - 1);
			}
		}
	}
}