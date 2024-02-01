// sort-the-odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// this problem support c++14
//
// g++ -std=c++11 space.cpp
// g++ -std=c++14 space.cpp

#include <iostream>
#include <vector>
#include <deque>
#include <algorithm>

using namespace std;


class TestTool {
public:
    void printVector(std::vector<int> const &a) {
        std::cout << "The vector elements are : ";

        for (int i = 0; i < a.size(); i++)
            std::cout << a.at(i) << ' ';
        std::cout << '\n';
    }

    void printDeque(std::deque<int> const &a) {
        std::cout << "The vector elements are : ";

        for (int i = 0; i < a.size(); i++)
            std::cout << a.at(i) << ' ';
        std::cout << '\n';
    }
};


class Kata {
public:
    std::vector<int> sortArray(std::vector<int> array) {
        std::deque<int> oddNumbers;
        std::copy_if(array.begin(),
                     array.end(),
                     std::back_inserter(oddNumbers),
                     [](int elem) {
                         return elem % 2 == 1;
                     });
        std::sort(oddNumbers.begin(), oddNumbers.end(), [](auto &&a, auto &&b) { return a < b; });

        std::vector<int> result;
        std::transform(array.begin(), array.end(),
                       std::back_inserter(result),
                       [&oddNumbers](auto &&elem) {
                           if (elem % 2 == 1) {
                               const int firstElement = oddNumbers.front();
                               oddNumbers.pop_front();
                               return firstElement;
                           }
                           return elem;
                       });

        return result;
    }
};

int main() {
    TestTool().printVector(Kata().sortArray({5, 3, 2, 8, 1, 4}));
    cout << "Hello, World!";
    return 0;
};
