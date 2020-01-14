// https://leetcode.com/problems/plus-one/
//
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Plus One.
// Memory Usage: 8.6 MB, less than 77.05% of C++ online submissions for Plus One.
// Runtime: 4 ms, faster than 66.94% of C++ online submissions for Plus One.
// Memory Usage: 8.6 MB, less than 77.05% of C++ online submissions for Plus One.
//
// $ g++ -std=c++11 66_plus_one.cpp

#include <iostream>

#include <sstream>
#include <string>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;


class TestTool {
public:
    void printVector(std::vector<int> const &a) {
        std::cout << "The vector elements are : ";

        for (int i = 0; i < a.size(); i++)
            std::cout << a.at(i) << ' ';
    }
};

class Solution {
public:
    vector<int> plusOne(vector<int> &digits) {
        digits.insert(digits.begin(), 0);
        digits[digits.size() - 1] = digits.back() + 1;
        for (int i = digits.size() - 1; i >= 0; i--) {
            if (digits.at(i) > 9) {
                digits[i] = digits[i] % 10;
                digits[i - 1] = digits[i - 1] + 1;
            }
        }
        if (digits[0] == 0) {
            digits.erase(digits.begin());
        }

        return digits;
    }
};


int main() {

//    vector<int> intArray{1, 2, 3, 9};
    vector<int> intArray{9, 8, 7, 6, 5, 4, 3, 2, 1, 0};
    TestTool().printVector(Solution().plusOne(intArray));
    cout << "Hello, World!";
    return 0;
}

