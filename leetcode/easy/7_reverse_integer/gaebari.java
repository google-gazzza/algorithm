"""
https://leetcode.com/problems/reverse-integer/
Runtime: 11 ms, faster than 5.31% of Java online submissions for Reverse Integer.
Memory Usage: 36 MB, less than 5.55% of Java online submissions for Reverse Integer.
"""
import java.util.Collections;
import static java.lang.Math.toIntExact;

class Solution {
    public int reverse(int x) {
        int flag = 1;
        long xx = x;
        if (x < 0) {
            xx = Math.abs((long)x);
            flag = -1;
        }

        String[] list = Long.toString(xx).split("");
        ArrayList<String> _list = new ArrayList<String>();

        for (String i : list) {
            _list.add(i);
        }

        Collections.reverse(_list);
        StringBuffer result = new StringBuffer();

        for (String s : _list) {
            result.append(s);
        }

        xx = Long.parseLong(result.toString());

        if (flag * xx > Integer.MAX_VALUE || flag * xx < Integer.MIN_VALUE)
            return 0;

        return flag * toIntExact(xx);
    }
}