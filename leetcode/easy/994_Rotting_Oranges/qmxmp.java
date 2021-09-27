//Runtime: 3 ms, faster than 83.95% of Java online submissions for Rotting Oranges.
//Memory Usage: 38.5 MB, less than 81.25% of Java online submissions for Rotting Oranges.

class Solution {
	class Location {
		int i;
		int j;

		Location(int a, int b) {
			i = a;
			j = b;
		}
	}

	public int orangesRotting(int[][] grid) {
		Queue<Location> q = new LinkedList<Location>();
		for (int i = 0; i < grid.length; i++) {
			for (int j = 0; j < grid[0].length; j++) {
				if (grid[i][j] == 2)
					q.add(new Location(i, j));
			}
		}
		int day = -1;
		while (!q.isEmpty()) {
			Queue<Location> newq = new LinkedList<Location>();
			boolean notStarted = true;
			while (notStarted || !q.isEmpty()) {
				notStarted = false;
				Location l = (Location) q.poll();
				Location t;

				t = rott(grid, l, 0, 1);
				if (t != null)
					newq.add(t);
				t = rott(grid, l, 0, -1);
				if (t != null)
					newq.add(t);
				t = rott(grid, l, -1, 0);
				if (t != null)
					newq.add(t);
				t = rott(grid, l, 1, 0);
				if (t != null)
					newq.add(t);

			}
			q = newq;
			day++;
		}

		return checkIfAllRotten(day, grid);
	}

	private int checkIfAllRotten(int day, int[][] grid) {
		for (int i = 0; i < grid.length; i++) {
			for (int j = 0; j < grid[0].length; j++) {
				if (grid[i][j] == 1)
					return -1;
			}
		}
		return day < 0 ? 0 : day;
	}

	private Location rott(int[][] grid, Location l, int i, int j) {
		if (l.i + i == -1 || l.j + j == -1)
			return null;
		if (l.i + i == grid.length || l.j + j == grid[0].length)
			return null;
		if (grid[l.i + i][l.j + j] == 0)
			return null;
		if (grid[l.i + i][l.j + j] == 2)
			return null;

		grid[l.i + i][l.j + j] = 2;

		return new Location(l.i + i, l.j + j);
	}
}