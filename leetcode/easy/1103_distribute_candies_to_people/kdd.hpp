// https://leetcode.com/problems/distribute-candies-to-people/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Distribute Candies to People.
// Memory Usage: 6.3 MB, less than 100.00% of C++ online submissions for Distribute Candies to People.

class Solution {
public:
    vector<int> distributeCandies(int candies, int num_people) {
        std::vector<int> results(num_people, 0);
        auto dist = 1;
        auto idx = 0;
        while (candies > 0) {
            results[idx] += dist;
            ++idx;
            if (idx >= num_people) idx = 0;
            candies -= dist;
            ++dist;
            if (candies - dist < 0) dist = candies;
        };
        return results;
    }
};