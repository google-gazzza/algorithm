/**
 https://leetcode.com/problems/valid-boomerang/
 runtime: 0ms,
 memory:39.78MB
 */
class Solution {
    public boolean isBoomerang(int[][] points) {
        int x1 = points[0][0];
        int y1 = points[0][1];
        int x2 = points[1][0];
        int y2 = points[1][1];
        int x3 = points[2][0];
        int y3 = points[2][1];
        if( (x1 == x2 && y1 == y2) ||
                (x2 == x3 && y2 == y3) ||
                (x1 == x3 && y1 == y3)
        ){
            return false;
        }
        if ((x1 - x2) * (y3 - y2) == (x3 - x2) * (y1 - y2)) {
            return false;
        }
        return true;
    }
}