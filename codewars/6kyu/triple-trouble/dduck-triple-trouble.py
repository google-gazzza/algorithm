# triple-trouble
# https://www.codewars.com/kata/55d5434f269c0c3f1b000058
from unittest import TestCase


def count_consecutive_num(num, size):
    target_num = []
    string = list(str(num))

    for i in range(len(string) - size + 1):
        if len(set(string[i:i + size])) == 1:
            target_num.append(string[i])

    return target_num


def triple_double(num1, num2):
    num1_result = count_consecutive_num(num1, 3)
    num2_result = count_consecutive_num(num2, 2)

    return 1 if len(list(filter(lambda x: x in num2_result, num1_result))) == 1 else 0


TestCase().assertEqual(triple_double(451999277, 41177722899), 1)
TestCase().assertEqual(triple_double(1222345, 12345), 0)
TestCase().assertEqual(triple_double(12345, 12345), 0)
TestCase().assertEqual(triple_double(666789, 12345667), 1)
TestCase().assertEqual(triple_double(10560002, 100), 1)
TestCase().assertEqual(triple_double(1112, 122), 0)
