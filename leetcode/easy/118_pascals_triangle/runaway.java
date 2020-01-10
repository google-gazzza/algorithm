// https://leetcode.com/problems/pascals-triangle/
// Runtime: 1 ms, faster than 25.67% of Java online submissions for Pascal's Triangle.
// Memory Usage: 33.6 MB, less than 7.23% of Java online submissions for Pascal's Triangle.

class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> t = new ArrayList<List<Integer>>();
        for (int y = 0; y < numRows; y++) {
            List<Integer> row = new ArrayList<Integer>();
            for (int x = 0; x < y + 1; x++) {
                if (x == 0 || x == y)
                    row.add(1);
                else {
                    List<Integer> prev = t.get(y - 1);
                    row.add(prev.get(x - 1) + prev.get(x));
                }   
            }
            t.add(row);
            t.add(row);
        }

        return t;
    }
}