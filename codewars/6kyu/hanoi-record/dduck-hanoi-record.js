// hanoi-record
// https://www.codewars.com/kata/534eb5ad704a49dcfa000ba6

const hanoi = (disks, count = 1, moves = 1) => {
  if (count === disks) {
    return moves;
  }
  
  return hanoi(disks, count + 1, moves * 2 + 1);
};

console.log(hanoi(3));
console.log(hanoi(4));
