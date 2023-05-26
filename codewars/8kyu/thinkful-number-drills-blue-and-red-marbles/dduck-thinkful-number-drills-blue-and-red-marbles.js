// thinkful-number-drills-blue-and-red-marbles
// Thinkful - Number Drills: Blue and red marbles
// difficulty: 8kyu
// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/

const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
  const totalLeft = blueStart - bluePulled + redStart - redPulled;
  
  return (blueStart - bluePulled) / totalLeft;
};



console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);
