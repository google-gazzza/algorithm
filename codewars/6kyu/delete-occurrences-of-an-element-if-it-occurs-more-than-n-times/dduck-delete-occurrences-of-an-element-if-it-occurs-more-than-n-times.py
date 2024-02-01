# delete-occurrences-of-an-element-if-it-occurs-more-than-n-times
# https://www.codewars.com/kata/554ca54ffa7d91b236000023

from unittest import TestCase


def delete_nth(order, max_e):
    count = dict()

    def counting_and_filtering_based_on_max_e(v, max_e):
        count[v] = count.get(v, 0) + 1
        return count.get(v) <= max_e

    return list(filter(lambda v: counting_and_filtering_based_on_max_e(v, max_e), order))


TestCase().assertEqual(delete_nth([20, 37, 20, 21], 1), [20, 37, 21])
TestCase().assertEqual(delete_nth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
