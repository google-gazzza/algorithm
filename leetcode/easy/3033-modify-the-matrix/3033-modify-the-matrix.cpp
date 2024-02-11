/* leetcode/easy/3033. Modify the Matrix
 * 3033-modify-the-matrix
 * URL: https://leetcode.com/problems/modify-the-matrix/description/
 *
 */
#include <iostream>
#include <vector>

class Solution {
public:
    std::vector<std::vector<int>> modifiedMatrix(std::vector<std::vector<int>> &matrix) {
        std::vector<int> columnMaxList;

        for (int i = 0; i < matrix[0].size(); i++) {
            int max = 0;
            for (int j = 0; j < matrix.size(); j++) {
                if (matrix[j][i] > max) {
                    max = matrix[j][i];
                }
            }
            columnMaxList.push_back(max);
        }

        for (int i = 0; i < matrix.size(); i++) {
            for (int j = 0; j < matrix[i].size(); j++) {
                if (matrix[i][j] == -1) {
                    matrix[i][j] = columnMaxList[j];
                }
            }
        }

        return matrix;
    }
};

int main() {
    Solution solution;
    return 0;
}
