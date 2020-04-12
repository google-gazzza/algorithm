// https://www.codewars.com/kata/554a44516729e4d80b000012
// $ g++ -std=c++11 space.cpp

#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

class BuyCar {
public:
    static std::vector<int>
    nbMonths(int startPriceOld, int startPriceNew, int savingperMonth, double percentLossByMonth) {
        double savedMoney = 0;
        double oldValue = startPriceOld;
        double lossLate = percentLossByMonth;
        double newValue = startPriceNew;
        int month = 1;

        while (newValue >= (oldValue + savedMoney)) {
            lossLate = 1 - ((percentLossByMonth + (0.5 * std::floor(month / 2))) / 100);
            savedMoney += savingperMonth;
            oldValue *= lossLate;
            newValue *= lossLate;
            month += 1;
        }

        int balance = std::round((oldValue + savedMoney) - newValue);
        return vector < int > {month - 1, balance};
    }
};

int main() {
    BuyCar *buyCar = new BuyCar();
    vector<int> result = buyCar->nbMonths(2000, 8000, 1000, 1.5);

    for (int i = 0; i < result.size(); i++) {
        std::cout << result.at(i) << "\n";
    }
    // [6, 766]
    return 0;
}
