// [JS][7kyu] Argue the toss
// argue-the-toss
// https://www.codewars.com/kata/5758a91bbd1fdd2033000947/train/javascript

function anArgument() {
  const args = Array.from(arguments)
  const argsLength = args.length
  if (argsLength === 0) {
    return `You didn't give me any arguments.`
  }
  if (argsLength === 1) {
    return `You gave me 1 argument and it is "${args[0]}".`
  }
  const lastArg = args.pop()
  const argsStr = args.map((arg) => `"${arg}"`).join(', ')
  return `You gave me ${argsLength} arguments and they are ${argsStr} and "${lastArg}".`
}

anArgument('chairs', 'table', 'lamp', 'sideboard') === 'You gave me 4 arguments and they are "chairs", "table", "lamp" and "sideboard".'
anArgument('limes', 'pickles', 'musk ox') === 'You gave me 3 arguments and they are "limes", "pickles" and "musk ox".'
anArgument('trains', 'trains', 'trains', 'trains', 'trains', 'trains') ===
  'You gave me 6 arguments and they are "trains", "trains", "trains", "trains", "trains" and "trains".'
