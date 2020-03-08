// https://www.codewars.com/kata/5bd776533a7e2720c40000e5

#include <iostream>
#include <vector>
#include <list>
#include <algorithm>

using namespace std;
using vec = vector<int>;

void printVector(const std::vector<int>& values) {
    for (std::vector<int>::const_iterator i = values.begin(); i != values.end(); ++i)
        std::cout << *i << ' ';
}

vector<int> Pendulum(vector<int> values) {
    sort(values.begin(), values.end());

    std::list<int> result = {};
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

    printVector(Pendulum(std::vec{5, 4, 2, 1, 2, 3}));

    return 0;
}


