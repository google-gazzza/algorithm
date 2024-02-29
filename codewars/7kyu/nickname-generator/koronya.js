// [JS][7kyu] Nickname Generator
// nickname-generator
// https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']

const nicknameGenerator = (name) => {
  if (name.length < 4) {
    return 'Error: Name too short'
  }
  return VOWEL_LIST.includes(name[2]) === true ? name.slice(0, 4) : name.slice(0, 3)
}

nicknameGenerator('Robert') //=> "Rob"
nicknameGenerator('Kimberly') //=> "Kim"
nicknameGenerator('Samantha') //=> "Sam"
nicknameGenerator('Jeannie') //=> "Jean"
nicknameGenerator('Douglas') //=> "Doug"
nicknameGenerator('Gregory') //=> "Greg"

nicknameGenerator('Jimmy') === 'Jim'
nicknameGenerator('Samantha') === 'Sam'
nicknameGenerator('Sam') === 'Error: Name too short'
nicknameGenerator('Kayne') === 'Kay', "'y' is not a vowel"
nicknameGenerator('Melissa') === 'Mel'
nicknameGenerator('James') === 'Jam'
