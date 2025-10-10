// [JS][7kyu] Naughty or Nice?
// naughty-or-nice
// https://www.codewars.com/kata/585eaef9851516fcae00004d/train/javascript

const NAUGHTY_LIST = ['b', 'f', 'k']
const NICE_LIST = ['g', 's', 'n']

const whatListAmIOn = (actions) => {
  const naughtyCount = actions.filter((action) => NAUGHTY_LIST.some((word) => action[0].includes(word))).length
  const niceCount = actions.filter((action) => NICE_LIST.some((word) => action[0].includes(word))).length

  return naughtyCount >= niceCount ? 'naughty' : 'nice'
}

whatListAmIOn(["broke someone's window", 'fought over a toaster', 'killed a bug']) === 'naughty'
whatListAmIOn(['got someone a new car', 'saved a man from drowning', 'never got into a fight']) === 'nice'
whatListAmIOn(['broke a vending machine', 'never got into a fight', "tied someone's shoes"]) === 'naughty'
