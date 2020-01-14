"""https://www.hackerrank.com/challenges/compare-the-triplets/problem
"""
#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the compareTriplets function below.
def compareTriplets(a, b):
    user1 = 0
    user2 = 0
    for i in range(len(a)):
        if a[i] > b[i]: user1 += 1
        elif b[i] > a[i]: user2 += 1

    return user1, user2
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    a = list(map(int, input().rstrip().split()))

    b = list(map(int, input().rstrip().split()))

    result = compareTriplets(a, b)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
