/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
/*
Runtime: 140 ms, faster than 96.93% of JavaScript online submissions for Design Parking System.
Memory Usage: 47.7 MB, less than 5.96% of JavaScript online submissions for Design Parking System.
*/
var ParkingSystem = function(big, medium, small) {
  this.parking_lot = {'big':big,'medium':medium,'small':small};
};

ParkingSystem.prototype.parking_lot = null;
/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType === 1){
        if(this.parking_lot.big === 0){
            return false;
        }
        this.parking_lot.big -=1;
    }else if(carType === 2){
        if(this.parking_lot.medium === 0){
            return false;
        }
        this.parking_lot.medium -=1;
    }else if(carType === 3){
        if(this.parking_lot.small === 0){
            return false;
        }
        this.parking_lot.small -=1;
    }
    return true;
        
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
