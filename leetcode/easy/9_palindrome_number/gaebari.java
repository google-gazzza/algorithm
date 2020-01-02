// Runtime: 32 ms, faster than 5.55% of Java online submissions for Palindrome Number.
// Memory Usage: 41 MB, less than 5.02% of Java online submissions for Palindrome Number.

class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        ArrayList<String> list = new ArrayList<String>();

        for (String i : Integer.toString(x).split("")){
            list.add(i);
        }
        boolean flag = false;

        for (int i = 0; i < list.size(); i++) {
            if (list.size() - (i + 1) <= i) {
                return true;
            }
            if (!list.get(i).equals(list.get(list.size() - (i + 1)))) {
                return false;
            }
        }

        return false;
    }
}