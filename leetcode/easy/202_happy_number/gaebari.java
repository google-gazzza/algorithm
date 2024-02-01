//https://leetcode.com/problems/happy-number/submissions/
//Runtime: 1 ms, faster than 98.31% of Java online submissions for Happy Number.
//Memory Usage: 36.7 MB, less than 6.06% of Java online submissions for Happy Number.
class Solution {
    public boolean isHappy(int n) {
        // 순환중에 중복을 막기 위해서 hashset 을 사용한다.
        Set<Integer> loop = new HashSet<Integer>();
        int squreNum, remain;
        // inLoop 안에 새로운 숫자를 넣고 연산한다.
        while (loop.add(n)) {
            squreNum = 0;
            // 나머지부터 연산한 후 다음 자릿수에 해당하는 숫자도 squreSum 에 추가해준다.
            while (n > 0) {
                remain = n%10;
                squreNum += remain * remain;
                n /= 10;
            }
            if (squreNum == 1) return true;
            else n = squreNum;
        }
        return false;
    }
}
