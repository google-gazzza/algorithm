//https://leetcode.com/problems/island-perimeter/
//Runtime: 5 ms, faster than 99.96% of Java online submissions for Island Perimeter.
//Memory Usage: 42 MB, less than 100.00% of Java online submissions for Island Perimeter.

class Solution {
    public int islandPerimeter(int[][] grid) {
        int num = 0; int minums = 0;
        for(int j =0; j<grid.length; j++){
            for(int i =0; i<grid[j].length;i++){
                if(grid[j][i] == 1) {
                    num++;
                    if(j<grid.length-1 && grid[j+1][i] == 1){
                        minums++;
                    }
                    if(i<grid[j].length-1 && grid[j][i+1] ==1){
                        minums++;
                    }
                }
            }
        }
        return num*4-minums*2;
    }
}
