// the-enigma-machine-part-1-the-plugboard
// The Enigma Machine - Part 1: The Plugboard
// https://www.codewars.com/kata/5523b97ac8f5025c45000900/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/the-enigma-machine-part-1-the-plugboard

class Plugboard {
  
  constructor(wires = '') {
    console.log(wires);
    if (new Set([...wires]).size !== wires.length
      || wires.length % 2 === 1
      || wires.length > 20) {
      throw '';
    }
    this.wires = wires;
  }
  
  process(wire) {
    const index = this.wires.indexOf(wire);
    if (index % 2 === 0) {
      return this.wires[index + 1];
    }
    if (index % 2 === 1) {
      return this.wires[index - 1];
    }
    return wire;
  }
}


plugboard = new Plugboard("AB");
console.log(plugboard.process('A'), 'B', "Invalid translation");
console.log(plugboard.process('B'), 'A', "Invalid translation");
console.log(plugboard.process('C'), 'C', "Invalid translation");
