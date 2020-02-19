// https://leetcode.com/problems/monotonic-array/
// Runtime: 80 ms, faster than 86.52% of C++ online submissions for Monotonic Array.
// Memory Usage: 13.9 MB, less than 100.00% of C++ online submissions for Monotonic Array.

class Solution {
public:
    bool isMonotonic(vector<int>& A) {
        if (A[0] == A[A.size() - 1]) {
            for (auto i = 1; i < A.size(); ++i) 
                if (A[i - 1] != A[i]) return false;
        }
        else if (A[0] > A[A.size() - 1]) {
            for (auto i = 1; i < A.size(); ++i)
                if (A[i - 1] < A[i]) return false;
        }
        else {
            for (auto i = 1; i < A.size(); ++i)
                if (A[i - 1] > A[i]) return false;
        }
        
        return true;
    }
};