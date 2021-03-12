// https://leetcode.com/problems/unique-paths/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Unique Paths.
// Memory Usage: 35.9 MB, less than 41.99% of Java online submissions for Unique Paths.
class Solution {
	public int uniquePaths(int m, int n) {
		int[][] memoization = new int[m][n];
		memoization[0][0] = 1; //시작지점은 1

		//한칸씩 채워나감
		//채울값은 위에서 아래로 가는것, 아래에서 오른쪽으로 가는것.
		//m과 n이 겹치는 가운데 라인은 갈수 있는 총 방법의 개수로 이루어짐
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				if(i > 0) {
					memoization[i][j] += memoization[i-1][j];
				}
				if(j > 0) {
					memoization[i][j] += memoization[i][j-1];
				}
			}
		}
		return memoization[m-1][n-1];
	}
}