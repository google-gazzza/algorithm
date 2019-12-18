// https://leetcode.com/problems/add-binary
// Runtime: 2 ms, faster than 64.85% of Java online submissions for Add Binary.
// Memory Usage: 36.2 MB, less than 100.00% of Java online submissions for Add Binary.

class Solution {
    public String addBinary(String a, String b) {
        if (a.length() < b.length()) {
            String temp = a;
            a = b;
            b = temp;
        }
        StringBuilder sb = new StringBuilder();
        int prev = 0;
        for (int i = 0; i < a.length(); i++) {
            int value = calc(a, b, i) + prev;
            prev = value / 2;
            sb.insert(0, (value % 2));
        }
        if (prev > 0) sb.insert(0, prev);
        return sb.toString();
    }

    private int calc(String a, String b, int i) {
        int ac = a.charAt(a.length() - 1 - i) == '1' ? 1 : 0;
        int bc = 0;
        if (i < b.length()) bc = b.charAt(b.length() - 1 - i) == '1' ? 1 : 0;
        return ac + bc;
    }

    public static void main(String args[]) {
        Solution s = new Solution();
        System.out.println(s.addBinary("11", "1"));
        System.out.println(s.addBinary("1010", "1011"));
    }
}