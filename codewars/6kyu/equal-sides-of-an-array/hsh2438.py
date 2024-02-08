# https://www.codewars.com/kata/5679aa472b8f57fb8c000047

def find_even_index(arr):
    right = sum(arr)
    left = 0
    for i, num in enumerate(arr):
        right -= num
        if left == right:
            return i
        else:
            left += num
    return -1


if __name__ == "__main__":
    assert find_even_index([1, 2, 3, 4, 3, 2, 1]) == 3
