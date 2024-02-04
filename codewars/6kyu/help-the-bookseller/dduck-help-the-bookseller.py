# https://www.codewars.com/kata/54dc6f5a224c26032800005c/
# Help the bookseller !

from unittest import TestCase

from collections import OrderedDict


def stock_list(list, indexes):
    index_dict = OrderedDict({index: 0 for index in indexes})

    for i in range(len(list)):
        if list[i][0] in index_dict:
            index_dict[list[i][0]] += int(list[i].split(" ")[1])

    result = []
    for key, value in index_dict.items():
        result.append(f'({key} : {value})')

    if sum(index_dict.values()) == 0:
        return ""

    return " - ".join(result)


b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
TestCase().assertEqual(stock_list(b, c), "(A : 200) - (B : 1140)")
