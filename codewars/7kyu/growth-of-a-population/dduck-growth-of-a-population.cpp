// https://www.codewars.com/kata/563b662a59afc2b5120000c6
// $ g++ -std=c++11 space.cpp

#include <iostream>

class Arge {
public:
    static int nbYear(int p0, double percent, int aug, int p) {
        int year = 0;
        while (p0 < p) {
            p0 = p0 + (p0 * (percent / 100)) + aug;
            ++year;
        }
        return year;
    };
};

int main() {

    std::cout << Arge().nbYear(1500, 5, 100, 5000);

    return 0;
}
