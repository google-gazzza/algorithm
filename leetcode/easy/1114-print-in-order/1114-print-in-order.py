# leetcode/easy/1114. Print in Order
# 1114-print-in-order
# URL: https://leetcode.com/problems/print-in-order/description/

import threading


class Foo:
    def __init__(self):
        self.lock = threading.Lock()
        self.condition = threading.Condition(self.lock)
        self.state = 0

    def first(self, printFirst: 'Callable[[], None]') -> None:
        with self.condition:
            while self.state != 0:
                self.condition.wait()

            # printFirst() outputs "first". Do not change or remove this line.
            printFirst()
            self.state = 1
            self.condition.notify_all()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        with self.condition:
            while self.state != 1:
                self.condition.wait()

            # printSecond() outputs "second". Do not change or remove this line.
            printSecond()
            self.state = 2
            self.condition.notify_all()

    def third(self, printThird: 'Callable[[], None]') -> None:
        with self.condition:
            while self.state != 2:
                self.condition.wait()

            # printThird() outputs "third". Do not change or remove this line.
            printThird()
            self.state = 3
            self.condition.notify_all()
