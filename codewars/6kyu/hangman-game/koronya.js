// [JS][6kyu] Hangman game
// hangman-game
// https://www.codewars.com/kata/56832fb41676465e82000030/train/javascript

class Hangman {
  constructor(word) {
    this.word = word
    this.remainCount = 6
    this.guessedLetters = new Set()
    this.findCount = 0
    this.validLetters = new Set()
    this.invalidLetters = new Set()
    this.isGameEnded = false
  }

  getStatus() {
    if (this.findCount === this.word.length) {
      this.isGameEnded = true
      return `You found the word! (${this.word})`
    }
    const answerText = this.word
      .split('')
      .map((letter) => (this.validLetters.has(letter) ? letter : '_'))
      .join(' ')
    const wrongText = Array.from(this.invalidLetters).join('')
    return `${answerText}${wrongText.length > 0 ? ' # ' + wrongText : ''}`
  }

  isCorrectGuess(letter) {
    return this.word.includes(letter)
  }

  guess(letter) {
    if (this.isGameEnded) {
      return 'The game has ended.'
    }
    if (this.guessedLetters.has(letter)) {
      return this.getStatus()
    }

    this.guessedLetters.add(letter)
    if (this.isCorrectGuess(letter)) {
      this.validLetters.add(letter)
      const countInWord = this.word.split('').filter((l) => l === letter).length
      this.findCount += countInWord
      return this.getStatus()
    } else {
      this.invalidLetters.add(letter)
      if (this.remainCount === 0) {
        this.isGameEnded = true
        return `You got hung! The word was ${this.word}.`
      }
      this.remainCount -= 1
      return this.getStatus()
    }
  }
}

const hangman = new Hangman('codet')
hangman.guess('w')
hangman.guess('a')
hangman.guess('r')
hangman.guess('s')
hangman.guess('e')
hangman.guess('d')
hangman.guess('o')
hangman.guess('c')
hangman.guess('x')
hangman.guess('y')
hangman.guess('z')

// const hangman = new Hangman('wars')
// hangman.guess('w')
// hangman.guess('u')
// hangman.guess('s')
// hangman.guess('a')
// hangman.guess('r')
// hangman.guess('g')
// hangman.guess('a')
