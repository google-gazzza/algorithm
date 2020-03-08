# https://www.codewars.com/kata/5a905c2157c562994900009d

from unittest import TestCase

import numpy


def product_array(numbers):
    def custom_filter(i):
        return numpy.multiply.reduce([cx for ci, cx in enumerate(numbers.copy()) if ci != i])

    return [custom_filter(i) for i in range(len(numbers))]


TestCase().assertEqual(product_array([12, 20]), [20, 12])
TestCase().assertEqual(product_array([12, 20]), [20, 12])
TestCase().assertEqual(product_array([3, 27, 4, 2]), [216, 24, 162, 324])
TestCase().assertEqual(product_array([13.0, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300])
TestCase().assertEqual(product_array([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320])
print("<COMPLETEDIN::")
