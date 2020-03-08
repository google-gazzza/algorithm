// https://leetcode.com/problems/plus-one/
// Runtime: 9 ms, faster than 9.56% of Java online submissions for Plus One.
// Memory Usage: 36.6 MB, less than 97.58% of Java online submissions for Plus One.

import java.math.BigInteger;

class Solution {
    public int[] plusOne(int[] digits) {
        BigInteger n = new BigInteger("0");
        for (int i = 0; i < digits.length  ; i++) {
            BigInteger tmp = new BigInteger(digits[i] + repeat("0", digits.length -2 -i));
            n = n.add(tmp);
        }

        n = n.add(new BigInteger("1"));

        String [] s = n.toString().split("");
        int[] ns = new int[s.length];

        for (int i = 0; i < s.length ; i++) {
            ns[i] = Integer.parseInt(s[i]);
        }

        return ns;
    }

    static public String repeat(String s, int n) {
        if (n < 0) {
            return "";
        }

        String tmp = s;

        for (int i = 0; i < n; i++) {
            s += tmp;
        }
        return s;
    }
}