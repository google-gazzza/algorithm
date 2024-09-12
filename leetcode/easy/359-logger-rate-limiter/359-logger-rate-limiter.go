/*
359-logger-rate-limiter
leetcode/easy/359. Logger Rate Limiter
Difficulty: easy
URL: https://leetcode.com/problems/logger-rate-limiter/
*/

package main

type Logger struct {
	duration   int
	loggingMap map[string]int
}

func Constructor() Logger {
	return Logger{
		duration:   10,
		loggingMap: map[string]int{},
	}
}

func (this *Logger) ShouldPrintMessage(timestamp int, message string) bool {
	_, hasKey := this.loggingMap[message]

	if !hasKey || timestamp-this.loggingMap[message] >= this.duration {
		this.loggingMap[message] = timestamp
		return true
	}

	return false
}