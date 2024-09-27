// [JS][6kyu] Guess Who?
// guess-who
// https://www.codewars.com/kata/58b2c5de4cf8b90723000051/train/javascript

class GuessWho {
  constructor(character) {
    this.correct = character
    this.guessCount = 1
    this.characteristic = [
      ['Jean-Claude', ['Male', 'Glasses', 'Brown eyes', 'Bald', 'White hair', 'Small mouth', 'Small nose']],
      ['Pierre', ['Male', 'Mustache', 'Brown eyes', 'Brown hair', 'Big mouth', 'Small nose']],
      ['Jean', ['Male', 'White hair', 'Big nose', 'Big mouth', 'Blue eyes']],
      ['Amelie', ['Female', 'Hat', 'Brown hair', 'Small mouth', 'Long hair', 'Brown eyes', 'Small nose']],
      ['Mirabelle', ['Female', 'Black hair', 'Earrings', 'Small mouth', 'Brown eyes', 'Big nose']],
      ['Isabelle', ['Female', 'Blonde hair', 'Glasses', 'Hat', 'Small mouth', 'Small nose', 'Brown eyes']],
      ['Antonin', ['Male', 'Brown eyes', 'Black hair', 'Small nose', 'Big mouth']],
      ['Bernard', ['Male', 'Brown eyes', 'Brown hair', 'Small nose', 'Hat']],
      ['Owen', ['Male', 'Blue eyes', 'Blonde hair', 'Small nose', 'Small mouth']],
      ['Dylan', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Small mouth', 'Bald', 'Beard']],
      ['Herbert', ['Male', 'Brown eyes', 'Blonde hair', 'Big nose', 'Small mouth', 'Bald']],
      ['Christine', ['Female', 'Blue eyes', 'Blonde hair', 'Small nose', 'Small mouth', 'Long hair']],
      ['Luc', ['Male', 'Brown eyes', 'White hair', 'Small nose', 'Small mouth', 'Glasses']],
      ['Cecilian', ['Male', 'Brown eyes', 'Ginger hair', 'Small nose', 'Small mouth']],
      ['Lionel', ['Male', 'Brown eyes', 'Brown hair', 'Big nose', 'Big mouth', 'Mustache']],
      ['Benoit', ['Male', 'Brown eyes', 'Brown hair', 'Small mouth', 'Small nose', 'Mustache', 'Beard']],
      ['Robert', ['Male', 'Blue eyes', 'Brown hair', 'Big nose', 'Big mouth']],
      ['Charline', ['Female', 'Brown hair', 'White hair', 'Small nose', 'Big mouth']],
      ['Renaud', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Big mouth', 'Mustache']],
      ['Michel', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Big mouth', 'Beard']],
      ['Pierre-Louis', ['Male', 'Blue eyes', 'Brown hair', 'Small nose', 'Small mouth', 'Bald', 'Glasses']],
      ['Etienne', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Small mouth', 'Glasses']],
      ['Henri', ['Male', 'Brown eyes', 'White hair', 'Small nose', 'Big mouth', 'Hat']],
      ['Damien', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Big mouth', 'Hat']],
    ]
    this.correctInfo = this.characteristic.filter((item) => item[0] === this.correct)[0][1]
  }

  guess(guess) {
    if (guess === this.correct) {
      return [`Correct! in ${this.guessCount} turns`]
    }
    this.guessCount += 1
    const nameList = this.characteristic.map((item) => item[0])
    if (nameList.includes(guess)) {
      const filteredList = this.characteristic.filter((item) => item[0] !== guess)
      this.characteristic = filteredList
      return filteredList.map((item) => item[0])
    } else {
      const filteredList =
        this.correctInfo.includes(guess) === true
          ? this.characteristic.filter((item) => item[1].includes(guess))
          : this.characteristic.filter((item) => !item[1].includes(guess))
      this.characteristic = filteredList
      return filteredList.map((item) => item[0])
    }
  }
}

// let game = new GuessWho('Amelie')
// let result = ['Amelie', 'Mirabelle', 'Isabelle', 'Christine', 'Charline']
// game.guess('Female')

// result = ['Amelie', 'Isabelle']
// game.guess('Hat')

// result = ['Amelie']
// game.guess('Isabelle')

// result = ['Correct! in 4 turns']
// game.guess('Amelie')

var game = new GuessWho('Herbert')
result = [
  'Jean-Claude',
  'Pierre',
  'Jean',
  'Antonin',
  'Bernard',
  'Owen',
  'Dylan',
  'Herbert',
  'Luc',
  'Cecilian',
  'Lionel',
  'Benoit',
  'Robert',
  'Renaud',
  'Michel',
  'Pierre-Louis',
  'Etienne',
  'Henri',
  'Damien',
]
game.guess('Female')

result = ['Pierre', 'Jean', 'Antonin', 'Bernard', 'Owen', 'Dylan', 'Herbert', 'Cecilian', 'Lionel', 'Benoit', 'Robert', 'Renaud', 'Michel', 'Henri', 'Damien']
game.guess('Glasses')

result = ['Owen', 'Dylan', 'Herbert', 'Renaud', 'Michel', 'Damien']
game.guess('Blonde hair')

result = ['Dylan', 'Herbert']
game.guess('Bald')

result = ['Correct! in 5 turns']
game.guess('Herbert')
