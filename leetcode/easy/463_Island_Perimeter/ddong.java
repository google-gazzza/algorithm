//https://leetcode.com/problems/island-perimeter
//Runtime: 444 ms, faster than 5.12% of Java online submissions for Island Perimeter.
//Memory Usage: 59.6 MB, less than 87.50% of Java online submissions for Island Perimeter.

class Solution {
    public int islandPerimeter(int[][] grid) {

        int sum = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {

                if (grid[i][j] == 1)
                    sum += sumRound(grid, i, j);
            }
        }

        return sum;
    }

    int sumRound(int[][] island, int yCoordinate, int xCoordinate) {

        int sum = 0;

        if (island[yCoordinate].length - 1 == xCoordinate || island[yCoordinate][xCoordinate + 1] == 0)
            sum++;
        if (xCoordinate == 0 || island[yCoordinate][xCoordinate - 1] == 0)
            sum++;
        if (yCoordinate == 0 || island[yCoordinate - 1][xCoordinate] == 0)
            sum++;
        if (island.length - 1 == yCoordinate || island[yCoordinate + 1][xCoordinate] == 0)
            sum++;

        return sum;
    }
}