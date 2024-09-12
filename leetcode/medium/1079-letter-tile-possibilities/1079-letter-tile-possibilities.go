/*
1079-letter-tile-possibilities
leetcode/medium/1079. Letter Tile Possibilities
URL: https://leetcode.com/problems/letter-tile-possibilities/
*/

package main

import "fmt"

func combination(tiles string, path string, combinationMap *map[string]bool) {
	if len(tiles) == 0 {
		return
	}

	for i := 0; i < len(tiles); i++ {
		new_path := path + string(tiles[i])
		(*combinationMap)[new_path] = true
		combination(tiles[:i]+tiles[i+1:], new_path, combinationMap)
	}
}

func numTilePossibilities(tiles string) int {
	combinations := make(map[string]bool)

	combination(tiles, "", &combinations)

	return len(combinations)
}

func main() {
	tiles := "AAB"
	fmt.Println(numTilePossibilities(tiles))
	//Output: 8

	tiles = "AAABBC"
	fmt.Println(numTilePossibilities(tiles))
	//Output: 188

	tiles = "V"
	fmt.Println(numTilePossibilities(tiles))
	//Output: 1
}
