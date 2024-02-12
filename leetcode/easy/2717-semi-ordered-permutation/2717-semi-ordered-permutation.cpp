/* leetcode/easy/2717. Semi-Ordered Permutation
 * 2717-semi-ordered-permutation
 * URL: https://leetcode.com/problems/semi-ordered-permutation/description/
 *
 */
#include <iostream>
#include <vector>

class Solution {
public:
    int semiOrderedPermutation(std::vector<int> &nums) {
        int count = 0;
        int n = nums.size();

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == n && i != n - 1) {
                int temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                count++;
            }
        }

        for (int i = nums.size() - 1; i > 0; i--) {
            if (nums[i] == 1 && i != 0) {
                int temp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = temp;
                count++;
            }
        }

        return count;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {2, 1, 4, 3};
    std::cout << solution.semiOrderedPermutation(nums) << std::endl;
    // 2
    nums = {2, 4, 1, 3};
    std::cout << solution.semiOrderedPermutation(nums) << std::endl;
    // 3
    nums = {1, 3, 4, 2, 5};
    std::cout << solution.semiOrderedPermutation(nums) << std::endl;
    // 0

    return 0;
}
