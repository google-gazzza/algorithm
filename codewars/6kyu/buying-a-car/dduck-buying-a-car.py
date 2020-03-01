# https://www.codewars.com/kata/554a44516729e4d80b000012

from unittest import TestCase


def nbMonths(oldValue, newValue, savingperMonth, percentLossByMonth):
    savedMoney = 0
    month = 1

    while (newValue > (oldValue + savedMoney)):
        lossLate = 1 - ((percentLossByMonth + (0.5 * (month // 2))) / 100)
        savedMoney += savingperMonth
        oldValue *= lossLate
        newValue *= lossLate
        month += 1

    return [month - 1, round((oldValue + savedMoney) - newValue)]


TestCase().assertEqual(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
TestCase().assertEqual(nbMonths(12000, 8000, 1000, 1.5), [0, 4000])
