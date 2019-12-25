"""
https://leetcode.com/problems/basic-calculator-ii/
Runtime: 1996 ms, faster than 5.01% of Python3 online submissions for Basic Calculator II.
Memory Usage: 15.2 MB, less than 11.11% of Python3 online submissions for Basic Calculator II.
"""


class Solution:
    def __init__(self):
        self.__operators = {'+', '-', '*', '/'}
        self.__nums = []
        self.__operations = []
        self.__existPriority = False

    def __isOperator(self, ch):
        return ch in self.__operators

    def __calculation(self, num1, num2, operation):
        if operation == '+':
            return int(num1)+int(num2)
        elif operation == '-':
            return int(num1)-int(num2)
        elif operation == '*':
            return int(num1)*int(num2)
        else:
            return int(num1)/int(num2)

    def calculate(self, s: str) -> int:
        def append_num(num):
            if self.__existPriority:
                self.__existPriority = False
                self.__nums.append(self.__calculation(self.__nums.pop(), num, self.__operations.pop()))
            else:
                self.__nums.append(num)

        num = ''
        for ch in s:
            if ch.isdigit():
                num += ch
            elif self.__isOperator(ch):
                append_num(num)
                num = ''
                self.__operations.append(ch)
                if ch == '*' or ch == '/':
                    self.__existPriority = True
        append_num(num)

        result = self.__nums.pop(0)
        while self.__nums:
            result = self.__calculation(result, self.__nums.pop(0), self.__operations.pop(0))

        return int(result)
