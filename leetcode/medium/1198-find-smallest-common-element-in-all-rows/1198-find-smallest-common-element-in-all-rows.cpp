/*
1198-find-smallest-common-element-in-all-rows
leetcode/medium/1198. Find Smallest Common Element in All Rows
URL: https://leetcode.com/problems/find-smallest-common-element-in-all-rows/description/

*/

class Solution {
public:
    auto getCommonElement(vector<int> &a, vector<int> &b) {
        vector<int> result;

        sort(a.begin(), a.end());
        sort(b.begin(), b.end());

        set_intersection(a.begin(), a.end(), b.begin(), b.end(), back_inserter(result));

        return result;
    }

    int smallestCommonElement(vector <vector<int>> &mat) {
        vector<int> commonElement = mat[0];

        for (auto &i: mat) {
            commonElement = getCommonElement(commonElement, i);
        }

        sort(commonElement.begin(), commonElement.end());

        if (commonElement.size() == 0) {
            return -1;
        }

        return commonElement[0];
    }
};
