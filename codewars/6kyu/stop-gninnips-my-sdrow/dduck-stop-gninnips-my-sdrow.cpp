// https://www.codewars.com/kata/563b662a59afc2b5120000c6
// $ g++ -std=c++11 space.cpp

#include <iostream>

#include <string>
#include <sstream>
#include <iterator>
#include <algorithm>
#include <vector>

using namespace std;

std::string spinWords(const std::string str) {
    vector <string> words;
    vector <string> reversed_words;

    istringstream iss(str);
    copy(istream_iterator<string>(iss),
         istream_iterator<string>(),
         back_inserter(words));

    std::transform(
            words.begin(),
            words.end(),
            std::back_inserter(reversed_words),
            [](string word) -> string {
                if (word.length() > 4) {
                    reverse(word.begin(), word.end());
                }
                return word;
            }
    );

    std::string result;
    for (const auto &word : reversed_words) result += word + " ";
    return result.substr(0, result.length() - 1);
}

int main() {
    std::cout << spinWords("Welcome") << "emocleW";
    std::cout << spinWords("to") << "to";
    std::cout << spinWords("CodeWars") << "sraWedoC";
    return 0;
}
