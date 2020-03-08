"""
https://www.hackerrank.com/challenges/flipping-bits/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous
"""
#!/bin/python3

import os

def flippingBits(n):
    rep_32_bit = 0xffffffff
    return n & rep_32_bit ^ rep_32_bit

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    q = int(input())
    for q_itr in range(q):
        n = int(input())
        result = flippingBits(n)
        fptr.write(str(result) + '\n')
    fptr.close()
