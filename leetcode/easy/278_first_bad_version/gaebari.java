//https://leetcode.com/problems/first-bad-version
//Runtime: 13 ms, faster than 36.07% of Java online submissions for First Bad Version.
//Memory Usage: 36.2 MB, less than 5.63% of Java online submissions for First Bad Version

public class Solution extends VersionControl {
        public int firstBadVersion(int n) {
                int start =1, end = n, mid;
                while (start < end) {
                        mid = start + (end -start) / 2;
                        if(isBadVersion(mid)) end = mid;
                        else start = mid +1;
                }

                return start;
        }
}