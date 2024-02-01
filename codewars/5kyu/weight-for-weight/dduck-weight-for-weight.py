# https://www.codewars.com/kata/5264d2b162488dc400000001/

from unittest import TestCase


def order_weight(string):
    return " ".join(
        map(
            lambda sorted_tuple: sorted_tuple[1],
            sorted(
                map(
                    lambda num: (sum(map(int, list(num))), num), string.split(" ")
                ),
                key=lambda x: (x[0], x[1])
            )
        )
    )


TestCase().assertEqual(order_weight("103 123 4444 99 2000"), "2000 103 123 4444 99")
TestCase().assertEqual(order_weight("2000 10003 1234000 44444444 9999 11 11 22 123"),
                       "11 11 2000 10003 22 123 1234000 44444444 9999")
