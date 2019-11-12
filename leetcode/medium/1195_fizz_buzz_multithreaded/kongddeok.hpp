// https://leetcode.com/problems/climbing-stairs/
// Runtime: 24 ms, faster than 96.61% of C++ online submissions for Fizz Buzz Multithreaded.
// Memory Usage: 9 MB, less than 100.00% of C++ online submissions for Fizz Buzz Multithreaded.

class FizzBuzz {
private:
    int n;
    std::atomic<int> i;

public:
    FizzBuzz(int n) {
        this->n = n;
        this->i = 1;
    }

    // printFizz() outputs "fizz".
    void fizz(function<void()> printFizz) {
        while (i <= n) {
            if (i % 3 == 0 && i % 5 != 0) {
                printFizz();
                ++i;
            }
            else std::this_thread::yield();
        }
    }

    // printBuzz() outputs "buzz".
    void buzz(function<void()> printBuzz) {
        while (i <= n) {
            if (i % 5 == 0 && i % 3 != 0) {
                printBuzz();
                ++i;
            }
            else std::this_thread::yield();
        }
    }

    // printFizzBuzz() outputs "fizzbuzz".
	void fizzbuzz(function<void()> printFizzBuzz) {
        while (i <= n) {
            if (i % 3 == 0 && i % 5 == 0) {
                printFizzBuzz();
                ++i;
            }
            else std::this_thread::yield();
        }
    }

    // printNumber(x) outputs "x", where x is an integer.
    void number(function<void(int)> printNumber) {
        while (i <= n) {
            if (i % 3 != 0 && i % 5 != 0) {
                printNumber(i);
                ++i;
            }
            else std::this_thread::yield();
        }
    }
};
