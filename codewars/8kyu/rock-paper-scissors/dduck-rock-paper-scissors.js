// rock-paper-scissors
// Rock Paper Scissors!
// difficulty: 8kyu
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/rock-paper-scissors

const rps = (p1, p2) => {
  const pattern = ['rock', 'paper', 'scissors'];
  const p1Index = pattern.findIndex((v) => v === p1);
  const p2Index = pattern.findIndex((v) => v === p2);
  
  if ((p1Index + 1) % 3 === p2Index) {
    return 'Player 2 won!';
  }
  if ((p1Index + 2) % 3 === p2Index) {
    return 'Player 1 won!';
  }
  
  return 'Draw!';
};

// p1 win
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));

// p2 win
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'paper'));

// draw
console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');
