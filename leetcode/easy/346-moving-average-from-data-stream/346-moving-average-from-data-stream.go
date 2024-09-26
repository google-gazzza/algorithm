/*
346-moving-average-from-data-stream
leetcode/easy/346. Moving Average from Data Stream
Difficulty: easy
URL: https://leetcode.com/problems/moving-average-from-data-stream/
*/

package main

import (
	"fmt"
)

type MovingAverage struct {
	size   int
	values []int
}

func Constructor(size int) MovingAverage {
	return MovingAverage{
		size:   size,
		values: make([]int, 0),
	}
}

func (this *MovingAverage) Next(val int) float64 {
	this.values = append(this.values, val)

	if len(this.values) > this.size {
		this.values = this.values[1:]
	}
	var sum int

	for _, v := range this.values {
		sum += v
	}
	return float64(sum) / float64(len(this.values))
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * obj := Constructor(size);
 * param_1 := obj.Next(val);
 */