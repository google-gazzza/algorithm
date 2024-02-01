# https://www.codewars.com/kata/55c45be3b2079eccff00010f

from unittest import TestCase

import re


def order(sentence):
    return " ".join(
        sorted(
            sentence.split(" "),
            key=lambda word: re.search('\d', word).group() if re.search('\d', word) else 0
        )
    )


TestCase().assertEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
TestCase().assertEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
TestCase().assertEqual(order(""), "")
