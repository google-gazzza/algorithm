// https://leetcode.com/problems/merge-sorted-array
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Merge Sorted Array.
// Memory Usage: 38.6 MB, less than 5.94% of Java online submissions for Merge Sorted Array.
class Solution {
	public void merge(int[] nums1, int m, int[] nums2, int n) {
		int i = 0, j = 0;
		int[] nums = new int[m+n];
		int k = 0;
		while (!(i == m && j == n)) {
			if (i == m) {
				nums[k++] = nums2[j++];
				continue;
			}else if (j == n) {
				nums[k++] = nums1[i++];
				continue;
			}else if (nums1[i] < nums2[j]) {
				nums[k++] = nums1[i++];
				continue;
			} else {
				nums[k++] = nums2[j++];
				continue;
			}
		}
		for(int q=0;q<nums.length;q++) {
			nums1[q]=nums[q];
		}
	}
}