// https://leetcode.com/problems/first-bad-version/
// Runtime: 11 ms, faster than 29.92% of Java online submissions for First Bad Version.
// Memory Usage: 32.9 MB, less than 100.00% of Java online submissions for First Bad Version.

/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int start = 1;
        int end = n;
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }
}