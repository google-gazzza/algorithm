class Solution:
    def searchRange(self, nums, target: int):
        n = len(nums)
        l, r = 0, n-1
        result = []
        def search(left, right):
            if right-left == 1 or right-left == 0:
                print(1, right,left)
                if nums[left] ==target:
                    result.append(left)
                if nums[right] == target:
                    result.append(right)
                return
            if left == right:
                print(2, right, left)
                if nums[left] == target:
                    result.append(left)
                return

            mid = left + (right - left) // 2

            print('nums, mid', nums, mid, left, right)
            # if mid == -1:
            #     return
            if nums[mid] == target:
                result.append(mid)
            search(left, mid)
            search(mid+1, right)

        search(l, r)
        # print(result)
        return list(set(result))



result = Solution().searchRange([5,7,7,8,8,10], 8)
print(result)
