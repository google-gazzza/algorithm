/*
leetcode/medium/54. Spiral Matrix
54-spiral-matrix
URL: https://leetcode.com/problems/spiral-matrix/description/

*/

package main

import "fmt"

func leftToRight(matrix [][]int, left, right, top, bottom int) []int {
	var result []int

	for i := left; i <= right; i++ {
		if matrix[top][i] != 999 {
			result = append(result, matrix[top][i])
		}
		matrix[top][i] = 999
	}

	return result
}

func topToBottom(matrix [][]int, top, bottom, left, right int) []int {
	var result []int

	for i := top; i <= bottom; i++ {
		if matrix[i][right] != 999 {
			result = append(result, matrix[i][right])
		}
		matrix[i][right] = 999
	}

	return result
}

func rightToLeft(matrix [][]int, right, left, top, bottom int) []int {
	var result []int

	for i := right; i >= left; i-- {
		if matrix[bottom][i] != 999 {
			result = append(result, matrix[bottom][i])
		}
		matrix[bottom][i] = 999
	}

	return result
}

func bottomToTop(matrix [][]int, bottom, top, left, right int) []int {
	var result []int

	for i := bottom; i >= top; i-- {
		if matrix[i][left] != 999 {
			result = append(result, matrix[i][left])
		}
		matrix[i][left] = 999
	}

	return result
}

func spiralOrder(matrix [][]int) []int {
	left, right, top, bottom := 0, len(matrix[0])-1, 0, len(matrix)-1
	result := []int{}

	for left <= right && top <= bottom {
		result = append(result, leftToRight(matrix, left, right, top, bottom)...)
		top++
		result = append(result, topToBottom(matrix, top, bottom, left, right)...)
		right--
		result = append(result, rightToLeft(matrix, right, left, top, bottom)...)
		bottom--
		result = append(result, bottomToTop(matrix, bottom, top, left, right)...)
		left++
	}

	return result
}

func main() {
	matrix := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
	fmt.Println(spiralOrder(matrix))
	//Output: [1,2,3,6,9,8,7,4,5]

	matrix = [][]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}}
	fmt.Println(spiralOrder(matrix))
	//Output: [1,2,3,4,8,12,11,10,9,5,6,7]
}
