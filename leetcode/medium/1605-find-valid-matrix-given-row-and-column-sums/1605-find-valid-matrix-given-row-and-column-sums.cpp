/*
1605-find-valid-matrix-given-row-and-column-sums
leetcode/medium/1605. Find Valid Matrix Given Row and Column Sums
URL: https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

class Solution {
public:
    vector <vector<int>> restoreMatrix(vector<int> &rowSum, vector<int> &colSum) {
        int m = rowSum.size();
        int n = colSum.size();
        vector <vector<int>> matrix(m, vector<int>(n, 0));

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = min(rowSum[i], colSum[j]);
                rowSum[i] -= matrix[i][j];
                colSum[j] -= matrix[i][j];
            }
        }

        return matrix;
    }
};
