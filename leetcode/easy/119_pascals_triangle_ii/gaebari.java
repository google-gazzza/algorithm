// https://leetcode.com/problems/pascals-triangle-ii
// Runtime: 1 ms, faster than 89.35% of Java online submissions for Pascal's Triangle II.
// Memory Usage: 34.2 MB, less than 6.17% of Java online submissions for Pascal's Triangle II.
class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<List<Integer>> results = new ArrayList<List<Integer>>();
        List<Integer> arr = new ArrayList<Integer>();

        for(int i=0; i < rowIndex + 1; i++)
        {
            arr.add(0, 1);
            for(int j=1; j < arr.size() -1; j++)  {
                arr.set(j, arr.get(j) + arr.get(j+1));
            }
        }

        return arr;
    }
}