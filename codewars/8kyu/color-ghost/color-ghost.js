// color-ghost
// Color Ghost
// difficulty: 8kyu
// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/

class Ghost {
  constructor() {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.round(Math.random() * 10) % 4];
  }
}

// var Ghost = function () {
//   this.color = ['white', 'yellow', 'purple', 'red'][Math.round(Math.random() * 10) % 4];
// };

new Ghost().color;
//?
