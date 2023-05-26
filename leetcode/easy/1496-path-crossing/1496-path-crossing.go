/*
1496-path-crossing
leetcode/easy/1496. Path Crossing
URL: https://leetcode.com/problems/path-crossing/
*/

package main

import (
	"encoding/json"
	"fmt"
)

func isPathCrossing(path string) bool {
	visitedCoordinates := make(map[string]bool)
	currentCoordinate := []int{0, 0}

	s, _ := json.Marshal(currentCoordinate)
	visitedCoordinates[string(s)] = true

	for _, v := range path {
		switch v {
		case 'N':
			currentCoordinate[1]++
		case 'S':
			currentCoordinate[1]--
		case 'E':
			currentCoordinate[0]++
		case 'W':
			currentCoordinate[0]--
		}

		s, _ := json.Marshal(currentCoordinate)
		_, isVisited := visitedCoordinates[string(s)]

		if isVisited {
			return true
		}

		visitedCoordinates[string(s)] = true
	}

	fmt.Println(visitedCoordinates)

	return false
}

func main() {
	path := "NES"
	fmt.Println("v:", isPathCrossing(path))
	//Output: false

	path = "NESWW"
	fmt.Println("v:", isPathCrossing(path))
	//Output: true

	path = "NNSWWEWSSESSWENNW"
	fmt.Println("v:", isPathCrossing(path))
	//Output: true
}
