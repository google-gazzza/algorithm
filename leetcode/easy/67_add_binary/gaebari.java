// https://leetcode.com/problems/add-binary
// Runtime: 5 ms, faster than 8.59% of Java online submissions for Add Binary.
// Memory Usage: 36.1 MB, less than 100.00% of Java online submissions for Add Binary.

import java.math.BigInteger;

class Solution {
    public String addBinary(String a, String b) {
        BigInteger r = new BigInteger(a, 2);
        BigInteger r2 = new BigInteger(b, 2);

        BigInteger result = r.add(r2);

        return result.toString(2);
    }
}
