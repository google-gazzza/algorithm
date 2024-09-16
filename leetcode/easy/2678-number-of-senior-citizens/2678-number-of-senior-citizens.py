# leetcode/easy/2678. Number of Senior Citizens
# 2678-number-of-senior-citizens
# URL: https://leetcode.com/problems/number-of-senior-citizens/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return len(
            list(
                filter(lambda x: int(x[11:13]) > 60, details)
            )
        )


details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"]
# Output: 2
assert Solution().countSeniors(details) == 2

details = ["1313579440F2036", "2921522980M5644"]
# Output: 0
assert Solution().countSeniors(details) == 0
