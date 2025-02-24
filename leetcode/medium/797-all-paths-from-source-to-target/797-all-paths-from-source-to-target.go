/*
797-all-paths-from-source-to-target
leetcode/medium/797. All Paths From Source to Target
URL: https://leetcode.com/problems/all-paths-from-source-to-target/
*/

package main

import "fmt"

func dfs(graph [][]int, node int, path *[]int, result *[][]int) {
	*path = append(*path, node)

	if node == len(graph)-1 {
		*result = append(*result, append([]int{}, *path...))
	}

	for _, nextNode := range graph[node] {
		if node != nextNode {
			dfs(graph, nextNode, path, result)
			*path = (*path)[:len(*path)-1]
		}
	}
}

func allPathsSourceTarget(graph [][]int) [][]int {
	var result [][]int
	var path []int

	dfs(graph, 0, &path, &result)

	return result
}

func main() {
	graph := [][]int{{1, 2}, {3}, {3}, {}}
	fmt.Println(allPathsSourceTarget(graph))
	//Output: [[0,1,3],[0,2,3]]

	graph = [][]int{{4, 3, 1}, {3, 2, 4}, {3}, {4}, {}}
	fmt.Println(allPathsSourceTarget(graph))
	//Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

	graph = [][]int{{2}, {3}, {1}, {}}
	fmt.Println(allPathsSourceTarget(graph))
	//[[0,2,1,3]]
}
