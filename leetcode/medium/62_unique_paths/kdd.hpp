// https://leetcode.com/problems/unique-paths/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Unique Paths.
// Memory Usage: 8.7 MB, less than 46.88% of C++ online submissions for Unique Paths.

class Solution {
private:
    int mm[101][101] = {0,};
    
public:
    int uniquePaths(int m, int n) {
        if (mm[m][n] != 0) return mm[m][n];
        if (m == 1 || n == 1) {
            mm[m][n] = 1;
            return 1;
        }
        
        mm[m][n] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
        return mm[m][n];
    }
};