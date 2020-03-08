// https://leetcode.com/problems/first-bad-version/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for First Bad Version.
// Memory Usage: 8.3 MB, less than 27.27% of C++ online submissions for First Bad Version.

// Forward declaration of isBadVersion API.
bool isBadVersion(int version);

class Solution {
public:
    int binarySearch(int64_t start, int64_t end) {
        if (start >= end) return start;
        auto mid = (start + end) / 2;
        if (isBadVersion(mid)) return binarySearch(start, mid);
        else return binarySearch(mid + 1, end);
    }
    
    int firstBadVersion(int n) {
        return binarySearch(1, n);
    }
};