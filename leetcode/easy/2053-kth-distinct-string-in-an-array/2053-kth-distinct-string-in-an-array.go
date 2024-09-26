/*
2053-kth-distinct-string-in-an-array
leetcode/easy/2053. Kth Distinct String in an Array
Difficulty: easy
URL: https://leetcode.com/problems/moving-average-from-data-stream/
*/

package main

import (
	"fmt"
	"sort"
)

type orderedMapElement struct {
	key   string
	order int
	count int
}

func countCharacters(chars []string) []orderedMapElement {
	_map := make(map[string]orderedMapElement)
	count := 0

	for _, v := range chars {
		if val, ok := _map[v]; ok {
			_map[v] = orderedMapElement{
				v,
				val.order,
				val.count + 1,
			}
		} else {
			_map[v] = orderedMapElement{v, count, 1}
			count++
		}

	}

	result := make([]orderedMapElement, 0)
	orders := make([]int, 0)

	for _, value := range _map {
		result = append(result, orderedMapElement{
			value.key,
			value.order,
			value.count,
		})
		orders = append(orders, value.order)
	}

	sort.SliceStable(result, func(i, j int) bool {
		return result[i].order < result[j].order
	})

	return result
}

func getDistinctCharacters(chars []string) []string {
	countedCharacters := countCharacters(chars)
	result := make([]string, 0)

	for _, v := range countedCharacters {
		if v.count == 1 {
			result = append(result, v.key)
		}
	}

	return result
}

func kthDistinct(arr []string, k int) string {
	distinctCharacters := getDistinctCharacters(arr)

	if len(distinctCharacters) >= k {
		return distinctCharacters[k-1]
	}

	return ""
}

func main() {
	arr := []string{"d", "b", "c", "b", "c", "a"}
	k := 2
	fmt.Println(kthDistinct(arr, k))
	//Output: "a"

	arr = []string{"aaa", "aa", "a"}
	k = 1
	fmt.Println(kthDistinct(arr, k))
	//Output: "aaa"

	arr = []string{"y", "azluz", "phjt", "duxb", "bhjs", "oqoan", "nb", "r", "bpa", "nva"}
	k = 1
	fmt.Printf(kthDistinct(arr, k))
	// y
}