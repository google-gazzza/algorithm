// finish-guess-the-number-game
// Finish Guess the Number Game
// difficulty: 8kyu
// https://www.codewars.com/kata/568018a64f35f0c613000054/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
    if (lives < 1) {
      throw Error();
    }
  }
  
  guess(n) {
    if (this.lives < 1 || n > this.number) {
      throw Error();
    }
    
    if (n === this.number) {
      return true;
    }
    
    this.lives -= 1;
    return false;
  }
}


let guesser = new Guesser(10, 2);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
console.log(guesser.guess(10));

guesser = new Guesser(10, 2);
guesser.guess(1);
console.log(!guesser.guess(1));

guesser = new Guesser(10, 2);
guesser.guess(1);
guesser.guess(2);
console.log(Error('Expect error already dead', () => {
  guesser.guess(10);
  //?
}));
