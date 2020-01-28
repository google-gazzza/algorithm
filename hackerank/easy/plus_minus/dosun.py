"""https://www.hackerrank.com/challenges/plus-minus/problem

"""
#!/bin/python3

def plusMinus(arr):
    positive, negative, zeros = 0, 0, 0
    len_arr = len(arr)
    for k, v in enumerate(arr):
        if(v > 0):
            positive += 1
        elif(v == 0):
            zeros += 1
        else:
            negative += 1

    print(positive/len_arr)
    print(negative/len_arr)
    print(zeros/len_arr)

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().rstrip().split()))
    plusMinus(arr)
