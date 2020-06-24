# Bouncing Balls
# https://www.codewars.com/kata/5544c7a5cb454edb3c000047/

from unittest import TestCase


def bouncingBall(h, bounce, window, count=0):
    if h < 0 or not (1 > bounce > 0) or window >= h:
        return -1

    return bouncingBall(h * bounce, bounce, window, count + 2) if h * bounce > window else count + 1


TestCase().assertEqual(bouncingBall(3, 0.66, 1.5), 3)
TestCase().assertEqual(bouncingBall(30, 0.66, 1.5), 15)
