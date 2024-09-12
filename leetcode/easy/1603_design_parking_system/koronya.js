// [Easy] 1603. Design Parking System
// 1603_design_parking_system

// https://leetcode.com/problems/design-parking-system
// Runtime: 140 ms, faster than 96.59% of JavaScript online submissions for Design Parking System.
// Memory Usage: 45.9 MB, less than 24.55% of JavaScript online submissions for Design Parking System.
const ParkingSystem = function (big, medium, small) {
  this.restBig = big
  this.restMedium = medium
  this.restSmall = small
}

ParkingSystem.prototype.addCar = function(carType) {
  switch (carType) {
    case 1:
      if (this.restBig > 0) {
        this.restBig -= 1
        return true
      } else {
        return false
      }
    case 2:
      if (this.restMedium > 0) {
        this.restMedium -= 1
        return true
      } else {
        return false
      }
    case 3:
      if (this.restSmall > 0) {
        this.restSmall -= 1
        return true
      } else {
        return false
      }
  }
}
