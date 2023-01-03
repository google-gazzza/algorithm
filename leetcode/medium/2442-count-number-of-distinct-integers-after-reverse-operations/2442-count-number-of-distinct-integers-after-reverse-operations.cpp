/*
2442-count-number-of-distinct-integers-after-reverse-operations
leetcode/medium/2442. Count Number of Distinct Integers After Reverse Operations
URL: https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/

*/

class Solution {
public:
    int countDistinctIntegers(vector<int> &nums) {
        int originalLength = nums.size();

        for (int i = 0; i < originalLength; i++) {
            string reversedNum = to_string(nums[i]);
            reverse(reversedNum.begin(), reversedNum.end());
            nums.push_back(stoi(reversedNum));
        }

        set<int> distinctNums(nums.begin(), nums.end());

        return distinctNums.size();
    }
};
