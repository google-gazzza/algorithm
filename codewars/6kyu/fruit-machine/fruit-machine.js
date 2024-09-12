/*
fruit-machine

# codewars/6kyu/Fruit Machine
Difficulty: 6kyu
URL: https://www.codewars.com/kata/590adadea658017d90000039

## Approach

### en

### kr

## Solution
### JavaScript

*/

const SCORE_MAP = {
  Wild: [100, 10, 0],
  Star: [90, 9, 18],
  Bell: [80, 8, 16],
  Shell: [70, 7, 14],
  Seven: [60, 6, 12],
  Cherry: [50, 5, 10],
  Bar: [40, 4, 8],
  King: [30, 3, 6],
  Queen: [20, 2, 4],
  Jack: [10, 1, 2],
};

function fruit(reels, spins) {
  const spinResult = reels.map((e, i) => reels[i][spins[i]]);
  const count = spinResult.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const countArray = Object.entries(count)
    .sort((a, b) => b[1] - a[1]);
  
  if (countArray[0][1] === 3) {
    return SCORE_MAP[countArray[0][0]][0];
  }
  if (countArray[0][1] === 2) {
    const isWildExist = countArray[1][0] === 'Wild';
    
    if (isWildExist) {
      return SCORE_MAP[countArray[0][0]][1] * 2;
    }
    return SCORE_MAP[countArray[0][0]][1];
  }
  return 0;
}


// test
let reel = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack'];
let spin = [0, 0, 0];
console.log(fruit([reel, reel, reel], spin), 100);

let reel1 = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack'];
let reel2 = ['Bar', 'Wild', 'Queen', 'Bell', 'King', 'Seven', 'Cherry', 'Jack', 'Star', 'Shell'];
let reel3 = ['Bell', 'King', 'Wild', 'Bar', 'Seven', 'Jack', 'Shell', 'Cherry', 'Queen', 'Star'];
spin = [5, 4, 3];
console.log(fruit([reel1, reel2, reel3], spin), 0);

reel1 = ['King', 'Cherry', 'Bar', 'Jack', 'Seven', 'Queen', 'Star', 'Shell', 'Bell', 'Wild'];
reel2 = ['Bell', 'Seven', 'Jack', 'Queen', 'Bar', 'Star', 'Shell', 'Wild', 'Cherry', 'King'];
reel3 = ['Wild', 'King', 'Queen', 'Seven', 'Star', 'Bar', 'Shell', 'Cherry', 'Jack', 'Bell'];
spin = [0, 0, 1];
console.log(fruit([reel1, reel2, reel3], spin), 3);

reel1 = ['King', 'Jack', 'Wild', 'Bell', 'Star', 'Seven', 'Queen', 'Cherry', 'Shell', 'Bar'];
reel2 = ['Star', 'Bar', 'Jack', 'Seven', 'Queen', 'Wild', 'King', 'Bell', 'Cherry', 'Shell'];
reel3 = ['King', 'Bell', 'Jack', 'Shell', 'Star', 'Cherry', 'Queen', 'Bar', 'Wild', 'Seven'];
spin = [0, 5, 0];
console.log(fruit([reel1, reel2, reel3], spin), 6);
