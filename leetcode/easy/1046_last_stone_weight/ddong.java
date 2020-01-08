// https://leetcode.com/problems/last-stone-weight/
// Runtime: 7 ms, faster than 22.28% of Java online submissions for Last Stone Weight.
// Memory Usage: 34.7 MB, less than 100.00% of Java online submissions for Last Stone Weight.

class Solution {
    public int lastStoneWeight(int[] stones) {

        Integer[] stoneArray = Arrays.stream( stones ).boxed().toArray( Integer[]::new );
        List<Integer> stoneList = new ArrayList<Integer>(Arrays.asList(stoneArray));

        while (stoneList.size() != 1) {

            final List<Integer> sumList = new ArrayList<>();

            stoneList.sort(Comparator.reverseOrder());
            
            sumList.addAll(stoneList);

            stoneList.clear();
            
            stoneList.add(sumList.get(0) - sumList.get(1));
            
            for (int i = 2; i < sumList.size(); i++) {

                stoneList.add(sumList.get(i));
            }
        }

        return stoneList.get(0);
    }
}