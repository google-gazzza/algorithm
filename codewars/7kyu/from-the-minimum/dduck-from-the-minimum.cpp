// https://www.codewars.com/kata/563b662a59afc2b5120000c6
// $ g++ -std=c++11 space.cpp

#include <iostream>

#include <string>
#include <vector>
#include <set>

using namespace std;

unsigned long long minValue(vector<int> values) {
    std::set<int> set(values.begin(), values.end());
    std::string s;
    for (const auto &v: set) {
        s += std::to_string(v);
    }
    return std::stoi(s);
}

int main() {
    minValue({1, 3, 1});
    return 0;
}
