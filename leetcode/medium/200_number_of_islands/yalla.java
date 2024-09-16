// https://leetcode.com/problems/number-of-islands/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Number of Islands.
// Memory Usage: 41.7 MB, less than 44.82% of Java online submissions for Number of Islands.

class Solution {

	int n;
	int m;
	public int numIslands(char[][] grid) {
		if(grid.length == 0) return 0;
		int count = 0;
		n = grid.length;
		m = grid[0].length;

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				if(grid[i][j] == '1'){
					// 섬을 발견하면 섬과 연결된 부분을 전부 없엠
					removeIsland(grid, i,j);
					count++;
				}

			}
		}
		return count;
	}

	private void removeIsland(char[][] grid, int i, int j){
		if(i < 0 || j < 0 || i >= n || j >= m || grid[i][j] != '1') return;
		grid[i][j] = '0';
		removeIsland(grid, i+1, j); //오른쪽
		removeIsland(grid, i-1, j); //왼쪽
		removeIsland(grid, i, j +1); //위
		removeIsland(grid, i, j -1); //아래
	}
}