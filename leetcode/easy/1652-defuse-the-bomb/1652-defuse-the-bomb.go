/*
1652-defuse-the-bomb
leetcode/easy/1652. Defuse the Bomb
URL: https://leetcode.com/problems/defuse-the-bomb/
*/

package main

import "fmt"

func sum(nums []int) int {
	result := 0

	for _, num := range nums {
		result += num
	}

	return result
}

func decrypt(code []int, k int) []int {
	result := make([]int, len(code))

	for i := 0; i < len(code); i += 1 {
		temp := 0

		if k > 0 {
			fmt.Println("k > 0")
			if i+k >= len(code) {
				fmt.Println("i+k > len(code)")
				temp = sum(code[i+1:]) + sum(code[0:(i+k)%len(code)+1])
			} else {
				fmt.Println("i+k < len(code)")
				fmt.Println(code[i+1 : i+k])
				temp = sum(code[i+1 : i+k+1])
			}

		} else {
			if i+k <= 0 {
				temp = sum(code[0:i]) + sum(code[len(code)+(i+k):])
			} else {
				temp = sum(code[i+k : i])
			}
		}

		result[i] = temp
	}

	return result
}

func main() {
	code := []int{5, 7, 1, 4}
	k := 3
	fmt.Println("v:", decrypt(code, k))
	//Output: [12,10,16,13]

	code = []int{1, 2, 3, 4}
	k = 0
	fmt.Println("v:", decrypt(code, k))
	//Output: [0,0,0,0]

	code = []int{2, 4, 9, 3}
	k = -2
	fmt.Println("v:", decrypt(code, k))
	//Output: [12,5,6,13]
}
