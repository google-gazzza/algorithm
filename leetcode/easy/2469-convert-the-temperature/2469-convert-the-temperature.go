/*
2469-convert-the-temperature
leetcode/easy/2469. Convert the Temperature
URL: https://leetcode.com/problems/convert-the-temperature/

NOTE: Explanation
*/

package main

import "fmt"

func convertTemperature(celsius float64) []float64 {
	kelvin := celsius + 273.15
	fahrenheit := celsius*1.80 + 32.00

	return []float64{kelvin, fahrenheit}
}

func main() {
	celsius := 36.50
	fmt.Println(convertTemperature(celsius))
	//Output: [309.65000,97.70000]

	celsius = 122.11
	fmt.Println(convertTemperature(celsius))
	//Output: [395.26000,251.79800]
}
