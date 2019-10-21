// https://leetcode.com/problems/climbing-stairs/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Climbing Stairs.
// Memory Usage: 33 MB, less than 5.26% of Java online submissions for Climbing Stairs.

//한번에 최대 2칸씩 오를 수 있음.
//안올라가면 0, 1칸 올라가면 1, 2칸 올라가면 2, 그이후로 계산

//답은 마지막 step만 알면 됨
//이전 값을 계속 불려가며 이전값을 더하는 식으로

class Solution {
  public int climbStairs(int n) {
    if(n < 0) return 0;
    if(n == 1) return 1;

    int[] ret = new int[n+1];

    ret[1] = 1;
    ret[2] = 2;

    for(int i=3; i<=n; i++){
      ret[i] = ret[i-1] + ret[i-2];
    }

    return ret[n];
  }
}
