/*
leetcode/easy/661. Image Smoother
661-image-smoother
uRL: https://leetcode.com/problems/image-smoother/description/
*/

package main

import (
	"fmt"
)

func getAverage(img [][]int, i int, j int) int {
	sum := 0
	count := 0

	for x := i - 1; x <= i+1; x++ {
		for y := j - 1; y <= j+1; y++ {
			if x >= 0 && x < len(img) && y >= 0 && y < len(img[0]) {
				sum += img[x][y]
				count++
			}
		}
	}
	return sum / count
}

func imageSmoother(img [][]int) [][]int {
	result := make([][]int, len(img))

	for i := 0; i < len(img); i++ {
		result[i] = make([]int, len(img[i]))
		for j := 0; j < len(img[i]); j++ {
			result[i][j] = getAverage(img, i, j)
		}
	}

	return result
}

func main() {
	img := [][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}}
	fmt.Println(imageSmoother(img))
	//Output: [[0,0,0],[0,0,0],[0,0,0]]

	img = [][]int{{100, 200, 100}, {200, 50, 200}, {100, 200, 100}}
	fmt.Println(imageSmoother(img))
	//Output: [[137,141,137],[141,138,141],[137,141,137]]
}
