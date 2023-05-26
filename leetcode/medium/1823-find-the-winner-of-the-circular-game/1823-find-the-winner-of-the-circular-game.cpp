/*
1823-find-the-winner-of-the-circular-game
leetcode/medium/1823. Find the Winner of the Circular Game
URL: https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

class Solution {
public:
    int findTheWinner(int n, int k) {
        auto q = queue<int>();

        for (int i = 1; i <= n; ++i) {
            q.push(i);
        }

        while (q.size() > 1) {
            for (int i = 0; i < k - 1; i++) {
                q.push(q.front());
                q.pop();
            }
            q.pop();
        }

        return q.front();
    }
};
