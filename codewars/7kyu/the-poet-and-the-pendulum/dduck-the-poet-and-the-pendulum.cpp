// https://www.codewars.com/kata/5bd776533a7e2720c40000e5

#include <iostream>
#include <vector>
#include <deque>
#include <algorithm>

using namespace std;
using vec = vector<int>;

void printVector(const std::vector<int>& values) {
    for (auto i = values.begin(); i != values.end(); ++i)
        std::cout << *i << ' ';
}

vector<int> Pendulum(vector<int> values) {
    sort(values.begin(), values.end());

    std::deque<int> result = {};
    bool flag = true;

    for (auto v: values) {
        if (flag) {
            result.push_front(v);
        } else {
            result.push_back(v);
        }
        flag = !flag;
    }

    return std::vector<int>(result.begin(), result.end());
}

int main() {

    printVector(Pendulum(vec{5, 4, 2, 1, 2, 3}));

    return 0;
}


