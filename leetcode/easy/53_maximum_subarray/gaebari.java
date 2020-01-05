// https://leetcode.com/problems/remove-element
// Runtime: 68 ms, faster than 5.06% of Java online submissions for Maximum Subarray.
// Memory Usage: 41.3 MB, less than 5.16% of Java online submissions for Maximum Subarray.

class Solution {
    public int maxSubArray(int[] nums) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        int n = 0;
        int most_n = -2147483647;

        for (int i : nums) {
            list.add(i);
            n = sum(list);
            if (most_n <= n) {
                most_n = n;
            }
            if (n < 0) {
                list.clear();
            }
        }

        return most_n;
    }

    static public int sum(ArrayList<Integer> list) {
        int n = 0;
        for (int j : list) {
            n += j;
        }
        return n;
    }
}