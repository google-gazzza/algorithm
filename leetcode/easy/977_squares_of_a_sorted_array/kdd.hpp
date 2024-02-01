// https://leetcode.com/problems/squares-of-a-sorted-array/
// Runtime: 100 ms, faster than 84.28% of C++ online submissions for Squares of a Sorted Array.
// Memory Usage: 12.4 MB, less than 100.00% of C++ online submissions for Squares of a Sorted Array.

class Solution {
public:
    vector<int> sortedSquares(vector<int>& A) {
        std::transform(A.begin(), A.end(), A.begin(), [](auto&& val) {
           return val * val; 
        });
        std::sort(A.begin(), A.end());
        return A;
    }
};