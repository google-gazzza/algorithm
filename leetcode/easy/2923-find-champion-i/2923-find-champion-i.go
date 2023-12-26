/*
leetcode/easy/2923. Find Champion I
2923-find-champion-i
uRL: https://leetcode.com/problems/find-champion-i/description/
*/

package main

import "fmt"

//Given a 0-indexed 2D boolean matrix grid of size n * n. For all i, j that 0 <= i, j <= n - 1 and i != j team i is stronger than team j if grid[i][j] == 1, otherwise, team j is stronger than team i.
//
//Team a will be the champion of the tournament if there is no team b that is stronger than team a.
//
//Return the team that will be the champion of the tournament.
func findChampion(grid [][]int) int {
	combination := [][]int{}

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid); j++ {
			if i != j && grid[i][j] == 1 {
				combination = append(combination, []int{i, j})
			}
		}
	}

	for i := 0; i < len(combination); i++ {
		for j := 0; j < len(combination); j++ {
			if combination[j][0] == -1 {
				continue
			}

			if combination[i][0] == combination[j][1] {
				combination[i][0] = -1
				break
			}
		}
	}

	for i := 0; i < len(combination); i++ {
		if combination[i][0] != -1 {
			return combination[i][0]
		}
	}

	return -1
}

func main() {
	grid := [][]int{{0, 1}, {0, 0}}
	fmt.Println(findChampion(grid))
	//Output: 0

	grid = [][]int{{0, 0, 1}, {1, 0, 1}, {0, 0, 0}}
	fmt.Println(findChampion(grid))
	//Output: 1

	grid = [][]int{{0, 1, 1}, {0, 0, 1}, {0, 0, 0}}
	fmt.Println(findChampion(grid))
}
