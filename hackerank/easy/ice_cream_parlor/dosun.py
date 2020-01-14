"""
https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
"""
#!/bin/python3

def whatFlavors(cost, money):
    costs = {}
    for k, v in enumerate(cost):
        if money - v in costs:
            print(' '.join([str(costs[money - v] + 1), str(k + 1)]))
        else:
            costs[v] = k

if __name__ == '__main__':
    t = int(input())
    for t_itr in range(t):
        money = int(input())
        n = int(input())
        cost = list(map(int, input().rstrip().split()))
        whatFlavors(cost, money)
