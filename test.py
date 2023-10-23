from typing import List

# class Solution:
#     def solution(self, numbers):
#         permutations = self.permutation(numbers)
#         answer = 0
#         for p in permutations:
#             answer += self.isPrime(p)
#         return answer
#
#     def permutation(self, nums):
#         results = []
#         for i in range(len(nums)):
#             results.append(nums[i] + self.permutation(nums[:i] + nums[i+1:]))
#             results += self.permutation(nums[:i] + nums[i+1:])
#         return results
#     def isPrime(self, num):
#         lst = [1] * num+1
#         lst[0] = 0
#         lst[1] = 0
#         i = 2
#         while i < num:
#             if lst[i] == 1:
#                 for j in range(i, nums, i):
#                     lst[j] = 0
#
#             i += 1
#         return lst[num]


class Solution:
    def solution(self, numbers):
        permutations = self.permutation(numbers)
        answer = 0
        for p in permutations:
            answer += self.isPrime(p)
        return answer

    def permutation(self, nums):
        results = []
        for i in range(len(nums)):
            # current = nums[i]
            # for num in :
            results += [nums[i]] + self.permutation(nums[:i] + nums[i + 1:])

        results += self.permutation(nums[:i] + nums[i + 1:])
        print(results)
        return results

    def isPrime(self, num):
        if num < 2:
            return 0
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return 0
        return 1


# Test cases
def test_solution():
    sol = Solution()

    assert sol.solution("17") == 3
    assert sol.solution("011") == 2
    assert sol.solution("2") == 1
    assert sol.solution("222") == 1

    print("All tests passed!")


test_solution()

# class Solution {
#     public int solution(String numbers) {
#         int answer = 0;
#         return answer;
#     }
# }


