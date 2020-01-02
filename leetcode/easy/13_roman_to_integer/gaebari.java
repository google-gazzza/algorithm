// https://leetcode.com/problems/roman-to-integer
// Runtime: 28 ms, faster than 5.18% of Java online submissions for Roman to Integer.
// Memory Usage: 39.9 MB, less than 5.48% of Java online submissions for Roman to Integer.

class Solution {
    public int romanToInt(String s) {
        int n = 0;

        // 작은 숫자가 큰 숫자 앞에 있으면 뺀다.
        while(s.length() > 1) {
            String[] tmp = s.split("");

            int n1 = getRomanNumber(tmp[0]);
            int n2 = getRomanNumber(tmp[1]);
            if (n1 < n2) {
                n += n2 - n1;
                s = s.substring(2, s.length());
            } else {
                n += n1;
                s = s.substring(1, s.length());
            }
        }

        if (s.length() == 1) {
            n += getRomanNumber(s);
        }

        return n;
    }

    static public int getRomanNumber(String s) {
        int n = 0;

        if (s.equals("I")) {
            n += 1;
        } else if ( s.equals("V")) {
            n += 5;
        } else if (s.equals("X")) {
            n += 10;
        } else if (s.equals("L")) {
            n += 50;
        } else if (s.equals("C")) {
            n += 100;
        } else if (s.equals("D")) {
            n += 500;
        } else if (s.equals("M")) {
            n += 1000;
        }
        return n;
    }

}