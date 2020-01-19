//https://leetcode.com/problems/minimum-time-visiting-all-points/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Minimum Time Visiting All Points.
//Memory Usage: 45.4 MB, less than 100.00% of Java online submissions for Minimum Time Visiting All Points.
class Solution {
    public int minTimeToVisitAllPoints(int[][] points) {

        int xPoint = 0;
        int yPoint = 0;
        int moveCount = 0;

        for (int i = 1; i < points.length; i++) {

            xPoint = Math.abs(points[i - 1][0] - points[i][0]);
            yPoint = Math.abs(points[i - 1][1] - points[i][1]);
            moveCount += Math.max(xPoint, yPoint);
        }

        return moveCount;
    }
}

// https://leetcode.com/problems/minimum-time-visiting-all-points/
// Runtime: 27 ms, faster than 5.04% of Java online submissions for Minimum Time isiting All Points.
// Memory Usage: 52.7 MB, less than 100.00% of Java online submissions for Minimum Time Visiting All Points.
class Solution {
    public int minTimeToVisitAllPoints(int[][] points) {

        int[] point = null;
        int moveCount = 0;

        for (int i = 1; i < points.length; i++) {

            point = points[i - 1];

            while (point != null) {

                point = stepByline(point, points[i]);
                if (point != null)
                    moveCount++;
            }
        }

        return moveCount;
    }

    int[] stepByline(int[] startPoint, int[] nextPoint) {

        final int startXpoint = startPoint[0];
        final int startYpoint = startPoint[1];
        final int nextXpoint = nextPoint[0];
        final int newxtYpoint = nextPoint[1];
        int[] resultArray = new int[2];

        if (startXpoint == nextXpoint && startYpoint == newxtYpoint)
            return null;

        if (startXpoint < nextXpoint && startYpoint < newxtYpoint) {
            resultArray[0] = startXpoint + 1;
            resultArray[1] = startYpoint + 1;
        } else if (startXpoint > nextXpoint && startYpoint > newxtYpoint) {
            resultArray[0] = startXpoint - 1;
            resultArray[1] = startYpoint - 1;
        } else if (startXpoint < nextXpoint && startYpoint > newxtYpoint) {
            resultArray[0] = startXpoint + 1;
            resultArray[1] = startYpoint - 1;
        } else if (startXpoint > nextXpoint && startYpoint < newxtYpoint) {
            resultArray[0] = startXpoint - 1;
            resultArray[1] = startYpoint + 1;
        } else if (startXpoint < nextXpoint) {
            resultArray[0] = startXpoint + 1;
            resultArray[1] = startYpoint;
        } else if (startXpoint > nextXpoint) {
            resultArray[0] = startXpoint - 1;
            resultArray[1] = startYpoint;
        } else if (startYpoint < newxtYpoint) {
            resultArray[0] = startXpoint;
            resultArray[1] = startYpoint + 1;
        } else if (startYpoint > newxtYpoint) {
            resultArray[0] = startXpoint;
            resultArray[1] = startYpoint - 1;
        }

        return resultArray;
    }
}