// https://leetcode.com/problems/majority-element
// Runtime: 14 ms, faster than 24.66% of Java online submissions for Majority Element.
// Memory Usage: 53.6 MB, less than 5.15% of Java online submissions for Majority Element.

class Solution {
    public int majorityElement(int[] nums) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        int result = 0;
        int tmp = 0;
        for (int num: nums) {
            if (!map.containsKey(num)) map.put(num, 1);
            else map.put(num, map.get(num)+1);
        }

        for (Map.Entry<Integer, Integer> entry: map.entrySet()) {
            int key = entry.getKey();
            int value = entry.getValue();
            if (value > tmp) {
                tmp = value;
                result = key;
            }
        }

        return result;
    }
}

