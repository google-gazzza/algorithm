// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/
// Runtime: 2 ms, faster than 97.42% of Java online submissions for Intersection of Two Arrays.
// Memory Usage: 39.6 MB, less than 24.00% of Java online submissions for Intersection of Two Arrays.
class Solution {
	public int[] intersection(int[] nums1, int[] nums2) {
		// 정렬 후 binary search로 하나씩 비교.
		// 같은것들만 set에 남겨서 return
		Set<Integer> set = new HashSet<>();
		Arrays.sort(nums2);
		for (int num : nums1) {
			if(isIntersection(num, nums2)){
				set.add(num);
			}
		}

		int[] ret = new int[set.size()];
		int i = 0;
		for (Integer val : set) {
			ret[i++] = val;
		}
		return ret;
	}

	private boolean isIntersection(int num, int[] nums2) {
		int start = 0;
		int end = nums2.length -1;

		while(start <= end){
			int middle = start + (end - start) / 2;
			if(nums2[middle] == num) return true;
			if(num < nums2[middle]){ //왼쪽
				end = middle -1;
			}else{ // 오른쪽
				start = middle +1;
			}
		}
		return false;
	}
}

