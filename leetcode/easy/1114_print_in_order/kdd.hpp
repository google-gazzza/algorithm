// https://leetcode.com/problems/print-in-order/
// Runtime: 136 ms, faster than 83.36% of C++ online submissions for Print in Order.
// Memory Usage: 9.4 MB, less than 100.00% of C++ online submissions for Print in Ord

class Foo {
private:
    std::promise<void> firstP;
    std::promise<void> secondP;
    
public:
    Foo() {
        
    }

    void first(function<void()> printFirst) {
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        firstP.set_value();
    }

    void second(function<void()> printSecond) {
        firstP.get_future().wait();
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        secondP.set_value();
    }

    void third(function<void()> printThird) {
        secondP.get_future().wait();
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
};