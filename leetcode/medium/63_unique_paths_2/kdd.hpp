// https://leetcode.com/problems/unique-paths-ii/
// Runtime: 12 ms, faster than 10.45% of C++ online submissions for Unique Paths II.
// Memory Usage: 9.2 MB, less than 90.00% of C++ online submissions for Unique Paths II.

class Solution {
    int mm[101][101] = {0,};
    
public:
    template <class Obstracle>
    int uniquePaths(int m, int n, Obstracle&& obstacleGrid) {
        if (m < 0 || n < 0) return 0;
        if (obstacleGrid[m][n]) return 0; 
        if (mm[m][n] != 0) return mm[m][n];                    
        if (m - 1 < 0) mm[m][n] = uniquePaths(m, n - 1, obstacleGrid);
        else if (n - 1 < 0) mm[m][n] = uniquePaths(m - 1, n, obstacleGrid);
        else mm[m][n] = uniquePaths(m - 1, n, obstacleGrid) + uniquePaths(m, n - 1, obstacleGrid);
        return mm[m][n];
    }
    
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        if (obstacleGrid[0][0] == 0) mm[0][0] = 1;
        return uniquePaths(obstacleGrid.size() - 1, obstacleGrid[0].size() - 1, obstacleGrid);
    }
};