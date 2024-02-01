//https://leetcode.com/problems/letter-combinations-of-a-phone-number
//Runtime: 4 ms, faster than 49.01% of Java online submissions for Letter Combinations of a Phone Number.
//Memory Usage: 38.9 MB, less than 6.16% of Java online submissions for Letter Combinations of a Phone Number.

class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<String>();
        if ( digits.length() == 0) {
            return result;
        }
        String[] mapping = new String[] {"0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        result.add("");

        for (int i = 0; i < digits.length() ; i++) {
            int x = digits.charAt(i) - '0';
            for (int j = 0; j < result.size() ; j++) {
                if(result.get(0).length() == i) {
                    String tmp2 = result.get(0);
                    result.remove(0);
                    for(String c : mapping[x].split("")) {
                        result.add(tmp2+c);
                    }
                }
            }
        }

        return result;
    }
}