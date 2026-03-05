// [JS][7kyu] Guess the Word: Count Matching Letters
// guess-the-word-count-matching-letters
// https://www.codewars.com/kata/5912ded3f9f87fd271000120/train/javascript

const countCorrectCharacters = (correctWord, guess) => {
  const correctWordArr = correctWord.split('')
  const guessArr = guess.split('')
  if (correctWordArr.length !== guessArr.length) {
    throw new Error('Words must be of the same length')
  }
  return correctWordArr.reduce((acc, curr, index) => acc + (curr === guessArr[index] ? 1 : 0), 0)
}

countCorrectCharacters('dog', 'car') === 0
countCorrectCharacters('dog', 'god') === 1
countCorrectCharacters('dog', 'cog') === 2
countCorrectCharacters('dog', 'cod') === 1
countCorrectCharacters('dog', 'bog') === 2
countCorrectCharacters('dog', 'dog') === 3
