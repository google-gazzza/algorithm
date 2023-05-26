// object-oriented-piracy
// Object Oriented Piracy
// difficulty: 8kyu
// https://www.codewars.com/kata/54fe05c4762e2e3047000add/

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.cargoWeight = draft - (crew * 1.5);
  }
  
  isWorthIt() {
    return this.cargoWeight >= 20;
  }
}


var emptyShip = new Ship(0, 0);
console.log(emptyShip.isWorthIt(), false);
