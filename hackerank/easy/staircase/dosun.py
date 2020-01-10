"""https://www.hackerrank.com/challenges/staircase/problem
"""
#!/bin/python3

def staircase(n):
    sharp = '#'
    for i in range(1, n + 1):
        print((sharp * i).rjust(n))


if __name__ == '__main__':
    n = int(input())
    staircase(n)
