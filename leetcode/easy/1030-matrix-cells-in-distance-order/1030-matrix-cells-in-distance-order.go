/*
leetcode/easy/1030. Matrix Cells in Distance Order
1030-matrix-cells-in-distance-order
uRL: https://leetcode.com/problems/matrix-cells-in-distance-order/description/
*/

package main

import (
	"fmt"
	"math"
	"sort"
)

func calculateDistance(r1, c1, r2, c2 int) int {
	return int(math.Abs(float64(r1-r2)) + math.Abs(float64(c1-c2)))
}
func allCellsDistOrder(rows int, cols int, rCenter int, cCenter int) [][]int {
	result := [][]int{}

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			result = append(result, []int{i, j})
			//result = append(result, []int{int(math.Abs(float64(i - rCenter))), int(math.Abs(float64(j - cCenter)))})
		}
	}

	sort.Slice(result, func(i, j int) bool {
		//The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.
		return calculateDistance(result[i][0], result[i][1], rCenter, cCenter) < calculateDistance(result[j][0], result[j][1], rCenter, cCenter)
	})

	return result
}

func main() {
	rows := 1
	cols := 2
	rCenter := 0
	cCenter := 0
	//fmt.Println(allCellsDistOrder(rows, cols, rCenter, cCenter))
	//Output: [[0,0],[0,1]]

	rows = 2
	cols = 2
	rCenter = 0
	cCenter = 1
	//fmt.Println(allCellsDistOrder(rows, cols, rCenter, cCenter))
	//Output: [[0,1],[0,0],[1,1],[1,0]]

	rows = 2
	cols = 3
	rCenter = 1
	cCenter = 2
	//Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
	//fmt.Println(allCellsDistOrder(rows, cols, rCenter, cCenter))

	rows = 3
	cols = 4
	rCenter = 0
	cCenter = 1
	fmt.Println(allCellsDistOrder(rows, cols, rCenter, cCenter))
	//	Output
	//[[0,1],[0,1],[0,0],[0,2],[1,1],[1,1],[1,0],[1,2],[2,1],[2,1],[2,0],[2,2]]
	//	Expected
	//	[[0,1],[0,0],[0,2],[1,1],[0,3],[1,0],[1,2],[2,1],[1,3],[2,0],[2,2],[2,3]]
}
