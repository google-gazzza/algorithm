// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/
//
// $ g++ -std=c++11 space.cpp

#include <iostream>

#include <string>
#include <vector>

using namespace std;

std::string likes(const std::vector <std::string> &names) {
    switch (names.size()) {
        case 0:
            return "no one likes this";
        case 1:
            return std::string(names[0]) + " likes this";
        case 2:
            return std::string(names[0]) + " and " + names[1] + " like this";
        case 3:
            return std::string(names[0]) + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return std::string(names[0]) + ", " + names[1] + " and " + std::to_string(names.size() - 2) +
                   " others like this";
    }
}

int main() {

    std::cout << likes({}) << "no one likes this" << "\n";
    std::cout << likes({"Peter"}) << "Peter likes this" << "\n";
    std::cout << likes({"Jacob", "Alex"}) << "Jacob and Alex like this" << "\n";
    std::cout << likes({"Max", "John", "Mark"}) << "Max, John and Mark like this" << "\n";
    std::cout << likes({"Alex", "Jacob", "Mark", "Max"}) << "Alex, Jacob and 2 others like this" << "\n";
    return 0;
}


