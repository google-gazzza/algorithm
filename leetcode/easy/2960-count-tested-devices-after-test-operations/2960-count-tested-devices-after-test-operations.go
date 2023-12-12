/*
leetcode/easy/2960. Count Tested Devices After Test Operations
2960-count-tested-devices-after-test-operations
uRL: https://leetcode.com/problems/count-tested-devices-after-test-operations/description/
*/

package main

import "fmt"

func countTestedDevices(batteryPercentages []int) int {
	count := 0

	for index, batteryPercentage := range batteryPercentages {
		if batteryPercentage > 0 {
			count++
		}

		for j := index + 1; j < len(batteryPercentages); j++ {
			if batteryPercentage > 0 {
				batteryPercentages[j] = batteryPercentages[j] - 1
			}
		}
	}

	return count
}
func main() {
	batteryPercentages := []int{1, 1, 2, 1, 3}
	//Output: 3
	fmt.Println(countTestedDevices(batteryPercentages))

	batteryPercentages = []int{0, 1, 2}
	//Output: 2
	fmt.Println(countTestedDevices(batteryPercentages))
}
