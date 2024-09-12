/*
1086-high-five
leetcode/easy/1086. High Five
Difficulty: easy
URL: https://leetcode.com/problems/high-five/
*/

package main

import (
	"fmt"
	"sort"
)

func average(nums []int) int {
	var sum int
	for _, num := range nums {
		sum += num
	}
	return sum / len(nums)
}

func highFive(items [][]int) [][]int {
	m := make(map[int][]int)

	for _, item := range items {
		if _, ok := m[item[0]]; !ok {
			m[item[0]] = []int{}
		}

		m[item[0]] = append(m[item[0]], item[1])
	}

	sortedKeys := []int{}

	for k := range m {
		sortedKeys = append(sortedKeys, k)
	}
	sort.Ints(sortedKeys)

	var resultMap [][]int

	i := 0
	for _, key := range sortedKeys {
		sort.Sort(sort.Reverse(sort.IntSlice(m[key])))
		resultMap = append(resultMap, []int{key, average(m[key][:5])})
		i += 1
	}

	return resultMap
}

func main() {
	items := [][]int{{1, 91}, {1, 92}, {2, 93}, {2, 97}, {1, 60}, {2, 77}, {1, 65}, {1, 87}, {1, 100}, {2, 100}, {2, 76}}
	fmt.Println(highFive(items))
	//  [[1,87],[2,88]]
}
