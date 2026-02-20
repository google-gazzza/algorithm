// [JS][7kyu] Doggy Daycare
// doggy-daycare
// https://www.codewars.com/kata/56951add53eccacf44000030/train/javascript

Dog.prototype.checkDog = function () {
  if (this.vaccinated && this.wormed) {
    return `${this.name} can be accepted`
  }
  if (!this.vaccinated && !this.wormed) {
    return `${this.name} can not be accepted`
  }
  return `${this.name} can only be accepted by itself`
}
