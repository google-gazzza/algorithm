/*
leetcode/easy/1037. Valid Boomerang
1037-valid-boomerang
uRL: https://leetcode.com/problems/valid-boomerang/
*/

package main

import (
	"fmt"
)

type Point struct {
	x, y int
}

// Check if three points are distinct
func areDistinct(points []Point) bool {
	return !(points[0] == points[1] || points[1] == points[2] || points[0] == points[2])
}

// Check if three points are collinear
func areCollinear(points []Point) bool {
	crossProduct := (points[1].x-points[0].x)*(points[2].y-points[0].y) - (points[1].y-points[0].y)*(points[2].x-points[0].x)
	return crossProduct == 0
}

func isBoomerang(points [][]int) bool {
	// Convert points to Point struct
	var pointsStruct []Point
	for _, point := range points {
		pointsStruct = append(pointsStruct, Point{point[0], point[1]})
	}

	// Check if three points are distinct and collinear
	return areDistinct(pointsStruct) && !areCollinear(pointsStruct)
}

func main() {
	points := [][]int{{1, 1}, {2, 3}, {3, 2}}
	//fmt.Println(isBoomerang(points))
	//Output: true

	points = [][]int{{1, 1}, {2, 2}, {3, 3}}
	//fmt.Println(isBoomerang(points))
	//Output: false
	points = [][]int{{0, 0}, {1, 0}, {2, 2}}
	//Output: true

	points = [][]int{{0, 0}, {1, 2}, {0, 1}}
	fmt.Println(isBoomerang(points))
	//Output: true
}
