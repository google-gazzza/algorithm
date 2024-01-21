/* leetcode/easy/2899. Last Visited Integers
 * 2899-last-visited-integers
 * URL: https://leetcode.com/problems/last-visited-integers/description/
 *
 */
#include <iostream>
#include <vector>

class Solution {
public:
    std::vector<int> lastVisitedIntegers(std::vector<std::string> &words) {
        std::vector<std::string> stack;
        int targetIndex = -1;
        int stepCount = 0;
        std::vector<std::string> resultString;

        for (auto &word: words) {
            if (word == "prev") {
                if (targetIndex >= 0) {
                    resultString.push_back(stack[targetIndex]);
                } else {
                    resultString.push_back("-1");
                }

                targetIndex--;
                stepCount++;
            } else {
                stack.push_back(word);
                targetIndex = static_cast<int>(stack.size()) - 1;
            }
        }

        std::vector<int> resultInt;

        for (auto &str: resultString) {
            resultInt.push_back(std::stoi(str));
        }

        return resultInt;
    }
};

int main() {
    Solution solution;
    std::vector<std::string> words = {"1", "2", "prev", "prev", "prev"};
    std::vector<int> result = solution.lastVisitedIntegers(words);

    // Print the result
    for (int num: result) {
        std::cout << num << " ";
    }
    //    Output: [2,1,-1]

    words = {"1", "prev", "2", "prev", "prev"};
    result = solution.lastVisitedIntegers(words);

    for (int num: result) {
        std::cout << num << " ";
    }

//    Output: [1,2,1]

    return 0;
}
