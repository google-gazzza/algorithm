// https://www.codewars.com/kata/563b662a59afc2b5120000c6
// $ g++ -std=c++11 space.cpp

#include <iostream>

#include <vector>
#include <unordered_set>

using namespace std;

vector<int> menFromBoys(vector<int> values) {
    std::unordered_set<int> set(values.begin(), values.end());
    std::vector<int> v(set.begin(), set.end());
    std::vector<int> even;
    std::vector<int> odd;

    for (const int &i:v) {
        if (i % 2 == 0) {
            even.push_back(i);
        } else {
            odd.push_back(i);
        }
    }

    std::sort(even.begin(), even.end());
    std::sort(odd.begin(), odd.end(), std::greater<int>());

    even.insert(even.end(), odd.begin(), odd.end());

    return even;
}

int main() {

    menFromBoys(vector < int > {82, 91, 72, 76, 76, 100, 85});

    return 0;
}
