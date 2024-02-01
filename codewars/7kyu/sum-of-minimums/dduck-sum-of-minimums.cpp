// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/

// $ g++ -std=c++11 space.cpp

#include <iostream>
#include <algorithm>
#include <vector>
#include <numeric>

using namespace std;

int sum_of_minimums(const std::vector <std::vector<int>> &numbers) {
    vector<int> result;
    std::transform(
            numbers.begin(),
            numbers.end(),
            std::back_inserter(result),
            [](vector<int> array) -> int {
                return *std::min_element(array.begin(), array.end());
            }
    );
    return std::accumulate(result.begin(), result.end(), 0);
}

int main() {
    std::vector <vector<int>> test = {{7, 9, 8, 6, 2},
                                      {6, 3, 5, 4, 3},
                                      {5, 8, 7, 4, 5}};
    std::cout << sum_of_minimums(test);
    // 9
    return 0;
}


//const sumOfMinimums = (arrays) => arrays.map((array) => array.sort((a, b) => a - b)[0])
//  .reduce((acc, cur) => acc + cur);
//
//console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
//console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76);
