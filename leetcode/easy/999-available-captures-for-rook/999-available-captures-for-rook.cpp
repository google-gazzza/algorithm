/*
999-available-captures-for-rook
leetcode/easy/999. Available Captures for Rook
URL: https://leetcode.com/problems/available-captures-for-rook/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

class Solution {
public:
    auto getRookCoordinates(const vector <vector<char>> &board) -> vector <vector<int>> {
        vector <vector<int>> rookCoordinates;

        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[i].size(); j++) {
                if (board[i][j] == 'R') {
                    rookCoordinates.push_back({i, j});
                }
            }
        }

        return rookCoordinates;
    }

    auto
    getAvailableAttackDirectionCount(const vector <vector<char>> &board, const vector<int> &rookCoordinates) -> int {
        auto availableAttackDirectionCount = 0;
        int row = rookCoordinates[0];
        int col = rookCoordinates[1];

        // up
        for (int i = row - 1; i >= 0; i--) {
            if (board[i][col] == 'p') {
                availableAttackDirectionCount++;
                break;
            } else if (board[i][col] == 'B') {
                break;
            }
        }

        // down
        for (int i = row + 1; i < board.size(); i++) {
            if (board[i][col] == 'p') {
                availableAttackDirectionCount++;
                break;
            } else if (board[i][col] == 'B') {
                break;
            }
        }

        // left
        for (int i = col - 1; i >= 0; i--) {
            if (board[row][i] == 'p') {
                availableAttackDirectionCount++;
                break;
            } else if (board[row][i] == 'B') {
                break;
            }
        }

        // right
        for (int i = col + 1; i < board[row].size(); i++) {
            if (board[row][i] == 'p') {
                availableAttackDirectionCount++;
                break;
            } else if (board[row][i] == 'B') {
                break;
            }
        }

        return availableAttackDirectionCount;
    }

    int numRookCaptures(vector <vector<char>> &board) {
        auto rookCoordinates = getRookCoordinates(board);

        return getAvailableAttackDirectionCount(board, rookCoordinates[0]);
    }
};
