// [JS][7kyu] Baby shark lyrics generator
// baby-shark-lyrics-generator
// https://www.codewars.com/kata/5d076515e102162ac0dc514e/train/javascript

const a = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa']
const b = 'doo doo doo doo doo doo'
const c = "Let's go hunt"
const fn = (s) => `${s}\n`.repeat(3)

const babySharkLyrics = () => a.map((v) => `${fn(`${v} shark, ${b}`)}${v} shark!\n`).join('') + `${fn(`${c}, ${b}`)}${c}!\nRun away,…`

babySharkLyrics()
