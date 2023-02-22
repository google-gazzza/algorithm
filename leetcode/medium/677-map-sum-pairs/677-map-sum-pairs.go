/*
leetcode/medium/677. Map Sum Pairs
677-map-sum-pairs
uRL: https://leetcode.com/problems/map-sum-pairs/description/

*/

package main

import "fmt"

type MapSum struct {
	_originalMap    map[string]int
	_accumulatedMap map[string]int
}

func Constructor() MapSum {
	return MapSum{
		_originalMap:    make(map[string]int),
		_accumulatedMap: make(map[string]int),
	}
}

func (this *MapSum) Insert(key string, val int) {
	if _, ok := this._originalMap[key]; ok {
		origianlValue := this._originalMap[key]

		for i := 1; i <= len(key); i++ {
			this._accumulatedMap[key[:i]] -= origianlValue
		}
	}
	this._originalMap[key] = val

	for i := 1; i <= len(key); i++ {
		this._accumulatedMap[key[:i]] += val
	}
}

func (this *MapSum) Sum(prefix string) int {
	return this._accumulatedMap[prefix]
}

func main() {
	fmt.Println("hello world")

	//obj := Constructor()
	//obj.Insert("apple", 3)
	//fmt.Println(obj.Sum("ap"))
	//obj.Insert("app", 2)
	//fmt.Println(obj.Sum("ap"))

	obj2 := Constructor()
	obj2.Insert("apple", 3)
	fmt.Println(obj2.Sum("ap"))
	obj2.Insert("app", 2)
	fmt.Println(obj2.Sum("ap"))
	obj2.Insert("apple", 5)
	//fmt.Println(obj2.Sum("ap"))
	obj2.Insert("apple", 1)
	fmt.Println(obj2.Sum("ap"))
}
