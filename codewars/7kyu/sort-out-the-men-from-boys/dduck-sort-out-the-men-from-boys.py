# https://www.codewars.com/kata/5af15a37de4c7f223e00012d/

from unittest import TestCase


def men_from_boys(arr):
    uniq_arr = list(set(arr))
    even_arr = sorted(list(filter(lambda x: x % 2 == 0, uniq_arr)))
    odd_arr = sorted(list(filter(lambda x: x % 2 == 1, uniq_arr)), reverse=True)
    even_arr.extend(odd_arr)

    return even_arr


TestCase().assertEqual(men_from_boys([7, 3, 14, 17]), [14, 17, 7, 3])
TestCase().assertEqual(men_from_boys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37])
TestCase().assertEqual(men_from_boys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33])
TestCase().assertEqual(men_from_boys([82, 91, 72, 76, 76, 100, 85]), [72, 76, 82, 100, 91, 85])
TestCase().assertEqual(men_from_boys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]), [2, 10, 17, 15, 1])
TestCase().assertEqual(men_from_boys([-32, -39, -35, -41]), [-32, -35, -39, -41])
TestCase().assertEqual(men_from_boys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71])
TestCase().assertEqual(men_from_boys([-94, -99, -100, -99, -96, -99]), [-100, -96, -94, -99])
TestCase().assertEqual(men_from_boys([-53, -26, -53, -27, -49, -51, -14]), [-26, -14, -27, -49, -51, -53])
TestCase().assertEqual(men_from_boys([-17, -45, -15, -33, -85, -56, -86, -30]),
                       [-86, -56, -30, -15, -17, -33, -45, -85])
TestCase().assertEqual(men_from_boys([12, 89, -38, -78]), [-78, -38, 12, 89])
TestCase().assertEqual(men_from_boys([2, -43, 95, -90, 37]), [-90, 2, 95, 37, -43])
TestCase().assertEqual(men_from_boys([82, -61, -87, -12, 21, 1]), [-12, 82, 21, 1, -61, -87])
TestCase().assertEqual(men_from_boys([63, -57, 76, -85, 88, 2, -28]), [-28, 2, 76, 88, 63, -57, -85])
