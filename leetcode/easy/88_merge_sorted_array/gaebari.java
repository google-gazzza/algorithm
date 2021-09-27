// https://leetcode.com/problems/merge-sorted-array

//1번 풀이
// Runtime: 1 ms, faster than 10.27% of Java online submissions for Merge Sorted Array.
// Memory Usage: 36.5 MB, less than 100.00% of Java online submissions for Merge Sorted Array.
import java.util.Arrays;

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for (int i = 0; i < n; i++) {
            nums1[m + i] = nums2[i];
        }

        int[] tmp = Arrays.copyOfRange(nums1, 0, m + n);
        Arrays.sort(tmp);

        for (int i = 0; i < nums1.length ; i++) {
            if (tmp.length - 1 >= i) nums1[i] = tmp[i];
            else nums1[i] = 0;

        }
    }
}

// 2번 풀이
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Merge Sorted Array.
// Memory Usage: 36.1 MB, less than 100.00% of Java online submissions for Merge Sorted Array.

import java.util.Arrays;

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int[] arr = Arrays.copyOf(nums1, nums1.length);
        int a = 0, b = 0;
        for (int i = 0; i < nums1.length ; i++) {
            if (a < m || b < n) {
                if ( a == m ) nums1[i] = nums2.length - 1 >= b ? nums2[b++] : 0;
                else if ( b == n) nums1[i] = arr.length - 1 >= a ? arr[a++] : 0;
                else nums1[i] = arr[a] <= nums2[b] ? arr[a++] : nums2[b++];

            }
            else nums1[i] = 0;
        }
    }
}

