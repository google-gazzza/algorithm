// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/submissions/
// Runtime: 11 ms, faster than 5.10% of Java online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 40.2 MB, less than 100.00% of Java online submissions for Find Numbers with Even Number of Digits.
class Solution {
    public int findNumbers(int[] nums) {

        final Integer[] integerArray = Arrays.stream( nums ).boxed().toArray( Integer[]::new );
        final List<Integer> numberList = new ArrayList<Integer>(Arrays.asList(integerArray));

        final long count = numberList.stream()
                .map(String::valueOf)
                .filter(x -> x.length() % 2 == 0)
                .count();
        
        return (int)count;
    }
}