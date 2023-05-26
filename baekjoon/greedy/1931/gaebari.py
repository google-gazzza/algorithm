# https://www.acmicpc.net/problem/1931
# 메모리       시간
# 42096kb    276ms

import sys
In = sys.stdin.readline

def main():
    n = int(input())
    schedules = [(*map(int, In().split(' ')),) for i in range(n)]
    schedules.sort()
    result, lastTime = 0, float('inf')
    for a, b in reversed(schedules):
        if b <= lastTime:
            lastTime = a
            result += 1
    print(result)

main()
