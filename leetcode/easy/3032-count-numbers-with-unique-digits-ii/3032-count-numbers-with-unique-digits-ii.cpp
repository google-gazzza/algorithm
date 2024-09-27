/* leetcode/easy/3032. Count Numbers With Unique Digits II
 * 3032-count-numbers-with-unique-digits-ii
 * URL: https://leetcode.com/problems/count-numbers-with-unique-digits-ii/description/
 *
 */
#include <iostream>
#include <vector>
#include <set>

class Solution {
public:
    bool isAllDigitDifferent(int n) {
        std::set<int> digits;

        while (n > 0) {
            int digit = n % 10;

            auto search = digits.find(digit);

            if (search != digits.end()) {
                return false;
            }

            digits.insert(digit);

            n /= 10;
        }

        return true;
    }

    int numberCount(int a, int b) {
        int count = 0;

        for (int i = a; i <= b; i++) {
            if (isAllDigitDifferent(i)) {
                count++;
            }
        }

        return count;
    }
};

int main() {
    Solution solution;
    int a = 1;
    int b = 20;
    std::cout << solution.numberCount(a, b) << std::endl;

//    Output: 19
    a = 9, b = 19;
    std::cout << solution.numberCount(a, b) << std::endl;
//    Output: 10
    a = 80, b = 120;
    std::cout << solution.numberCount(a, b) << std::endl;
//    Output: 27

    return 0;
}
