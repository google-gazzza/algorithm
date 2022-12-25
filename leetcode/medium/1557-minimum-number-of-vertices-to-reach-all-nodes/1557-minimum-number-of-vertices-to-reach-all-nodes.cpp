/*
1557-minimum-number-of-vertices-to-reach-all-nodes
leetcode/medium/1557. Minimum Number of Vertices to Reach All Nodes
URL: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

class Solution {
public:
    vector<int> findSmallestSetOfVertices(int n, vector <vector<int>> &edges) {
        set<int> from = {};
        set<int> to = {};

        for (auto &edge: edges) {
            from.insert(edge[0]);
            to.insert(edge[1]);
        }

        auto result = vector<int>();

        for (auto &f: from) {
            if (to.count(f) == 0) {
                result.push_back(f);
            }
        }

        return result;
    }
};

auto n = 6;
auto edges = {{0, 1},
              {0, 2},
              {2, 5},
              {3, 4},
              {4, 2}};

void main() {
    Solution solution;
    auto result = solution.findSmallestSetOfVertices(n, edges);

    for (auto &i: result) {
        cout << i << " ";
    }
}
//Output: [0,3]
