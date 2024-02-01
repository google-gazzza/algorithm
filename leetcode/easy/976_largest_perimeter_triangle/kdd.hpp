// https://leetcode.com/problems/largest-perimeter-triangle/
// Runtime: 52 ms, faster than 86.31% of C++ online submissions for Largest Perimeter Triangle.
// Memory Usage: 9.8 MB, less than 100.00% of C++ online submissions for Largest Perimeter Triangle.

class Solution {
public:
    int largestPerimeter(vector<int>& A) {
        std::sort(A.begin(), A.end());
        for (int32_t i = A.size() - 1; i >= 2; --i) {
            if (A[i] < A[i - 1] + A[i - 2]) return A[i] + A[i - 1] + A[i - 2];
        }
        
        return 0;
    }
};