/*
leetcode/easy/599. Minimum Index Sum of Two Lists
599-minimum-index-sum-of-two-lists
uRL: https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/

*/

package main

import "fmt"

func min(a, b int) int {
	if a < b {
		return a
	}

	return b
}

func findRestaurant(list1 []string, list2 []string) []string {
	wordMap := make(map[string]int)
	temp := make(map[string]int)

	for i, word := range list1 {
		wordMap[word] = i
	}

	minimumSum := len(list1) + len(list2)

	for i, word := range list2 {
		if _, ok := wordMap[word]; ok {
			temp[word] = i + wordMap[word]
			minimumSum = min(minimumSum, temp[word])
		}
	}

	result := []string{}

	for key, value := range temp {
		if value == minimumSum {
			result = append(result, key)
		}
	}

	return result
}

func main() {
	list1 := []string{"Shogun", "Tapioca Express", "Burger King", "KFC"}
	list2 := []string{"Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"}
	fmt.Println(findRestaurant(list1, list2))
	//Output: ["Shogun"]

	list1 = []string{"Shogun", "Tapioca Express", "Burger King", "KFC"}
	list2 = []string{"KFC", "Shogun", "Burger King"}
	fmt.Println(findRestaurant(list1, list2))
	//Output: ["Shogun"]

	list1 = []string{"happy", "sad", "good"}
	list2 = []string{"sad", "happy", "good"}
	fmt.Println(findRestaurant(list1, list2))
	//Output: ["sad","happy"]

	list1 = []string{"k", "KFC"}
	list2 = []string{"k", "KFC"}
	fmt.Println(findRestaurant(list1, list2))
	//Output: ["k"]
}